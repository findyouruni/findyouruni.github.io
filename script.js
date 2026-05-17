function raporToGPA(score) {
  return (score / 100) * 4;
}

function getRankRange(gpa) {

  if (gpa >= 3.9) return [1, 10];
  if (gpa >= 3.7) return [11, 20];
  if (gpa >= 3.5) return [21, 30];
  if (gpa >= 3.3) return [31, 50];
  if (gpa >= 3.0) return [51, 80];

  return [81, 100];
}

function acceptanceChance(gpa, rank) {

  let chance = 95 - rank;

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

  const calc = document.getElementById("calculator");

  calc.classList.toggle("hidden");
}

function calculateAverage() {

  const s1 = Number(document.getElementById("s1").value) || 0;
  const s2 = Number(document.getElementById("s2").value) || 0;
  const s3 = Number(document.getElementById("s3").value) || 0;
  const s4 = Number(document.getElementById("s4").value) || 0;

  const average = (s1 + s2 + s3 + s4) / 4;

  const gpa = raporToGPA(average);

  document.getElementById("avgResult").innerHTML = `
    <h3>Average Score: ${average.toFixed(2)}</h3>
    <h3>Converted GPA: ${gpa.toFixed(2)}</h3>
  `;
}

function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const score =
    parseFloat(document.getElementById("score").value);

  const results =
    document.getElementById("results");

  if (isNaN(score)) {

    results.innerHTML =
      "<h2>Please enter a valid score.</h2>";

    return;
  }

  let gpa;

  if (inputType === "gpa") {

    gpa = score;

  } else {

    gpa = raporToGPA(score);
  }

  const range = getRankRange(gpa);

  const minRank = range[0];
  const maxRank = range[1];

  let recommended = universities.filter(function(uni) {

    return uni.rank >= minRank &&
           uni.rank <= maxRank;
  });

  if (recommended.length === 0) {

    recommended = universities.slice(
      universities.length - 10
    );
  }

  recommended = recommended.slice(0, 10);

  let html = `

    <div class="resultTitle">
      <h2>Your GPA: ${gpa.toFixed(2)}</h2>
      <p>Recommended QS Rank Range:
      ${minRank} - ${maxRank}</p>
    </div>

    <div class="grid">
  `;

  recommended.forEach(function(uni) {

    const chance =
      acceptanceChance(gpa, uni.rank);

    html += `

      <div class="card">

        <img
          src="${uni.logo}"
          class="logo"
          alt="${uni.name}"
          onerror="this.src='https://via.placeholder.com/80'"
        >

        <h3>${uni.name}</h3>

        <p class="rank">
          QS Rank #${uni.rank}
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
