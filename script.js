console.log("script loaded");

function raporToGPA(score) {
  return (score / 100) * 4;
}

function getRankRange(gpa) {

  if (gpa >= 3.9) return [1, 20];
  if (gpa >= 3.7) return [21, 40];
  if (gpa >= 3.5) return [41, 60];
  if (gpa >= 3.2) return [61, 80];

  return [81, 100];
}

function acceptanceProbability(gpa, rank) {

  let chance = 100 - rank;

  chance += (gpa - 3.0) * 20;

  if (chance > 90) {
    chance = 90;
  }

  if (chance < 1) {
    chance = 1;
  }

  return Math.round(chance);
}

function toggleCalculator() {

  console.log("toggle calculator clicked");

  const calculator = document.getElementById("calculator");

  calculator.classList.toggle("hidden");
}

function calculateAverage() {

  console.log("calculate average clicked");

  const s1 = Number(document.getElementById("s1").value) || 0;
  const s2 = Number(document.getElementById("s2").value) || 0;
  const s3 = Number(document.getElementById("s3").value) || 0;
  const s4 = Number(document.getElementById("s4").value) || 0;

  const avg = (s1 + s2 + s3 + s4) / 4;

  const gpa = raporToGPA(avg);

  document.getElementById("avgResult").innerHTML = `
    Average Score: <strong>${avg.toFixed(2)}</strong><br>
    GPA Equivalent: <strong>${gpa.toFixed(2)}</strong>
  `;
}

function findUniversities() {

  console.log("find universities clicked");

  const inputType = document.getElementById("inputType").value;

  const scoreInput = document.getElementById("score").value;

  const score = parseFloat(scoreInput);

  const results = document.getElementById("results");

  if (isNaN(score)) {

    results.innerHTML = `
      <p>Please enter a valid score.</p>
    `;

    return;
  }

  let gpa;

  if (inputType === "gpa") {

    gpa = score;

  } else {

    gpa = raporToGPA(score);
  }

  const rankRange = getRankRange(gpa);

  const minRank = rankRange[0];
  const maxRank = rankRange[1];

  let filtered = universities.filter(function(uni) {

    return uni.generalRank >= minRank &&
           uni.generalRank <= maxRank;
  });

  if (filtered.length === 0) {

    filtered = universities;
  }

  filtered = filtered.slice(0, 10);

  let html = `

    <div class="resultTitle">
      <h2>Your GPA: ${gpa.toFixed(2)}</h2>
      <p>Recommended QS Rank Range: ${minRank} - ${maxRank}</p>
    </div>

    <div class="grid">
  `;

  filtered.forEach(function(uni) {

    const chance = acceptanceProbability(
      gpa,
      uni.generalRank
    );

    html += `

      <div class="card">

        <img
          src="${uni.logo}"
          class="logo"
          alt="${uni.name}"
        >

        <h3>${uni.name}</h3>

        <p class="rank">
          QS Rank #${uni.generalRank}
        </p>

        <p class="acceptance">
          ${chance}% Acceptance Chance
        </p>

        <button onclick="window.open('${uni.website}', '_blank')">
          Visit Website
        </button>

      </div>
    `;
  });

  html += "</div>";

  results.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {

  console.log("DOM fully loaded");

  document
    .getElementById("findBtn")
    .addEventListener("click", findUniversities);

  document
    .getElementById("calcBtn")
    .addEventListener("click", toggleCalculator);

  document
    .getElementById("avgBtn")
    .addEventListener("click", calculateAverage);
});
