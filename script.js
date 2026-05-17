function raporToGPA(score) {
  return (score / 100) * 4;
}

function getRankRange(gpa) {

  if (gpa >= 3.9) return [1, 10];
  if (gpa >= 3.7) return [11, 20];
  if (gpa >= 3.5) return [21, 35];
  if (gpa >= 3.3) return [36, 50];
  if (gpa >= 3.1) return [51, 70];
  if (gpa >= 3.0) return [71, 85];

  return [86, 100];
}

function acceptanceChance(gpa, rank) {

  let chance = 92 - rank;

  chance += (gpa - 3.0) * 18;

  if (chance > 90) {
    chance = 90;
  }

  if (chance < 1) {
    chance = 1;
  }

  return Math.round(chance);
}

function toggleCalculator() {

  const calculator =
    document.getElementById("calculator");

  calculator.classList.toggle("hidden");
}

function calculateAverage() {

  const s1 =
    Number(document.getElementById("s1").value);

  const s2 =
    Number(document.getElementById("s2").value);

  const s3 =
    Number(document.getElementById("s3").value);

  const s4 =
    Number(document.getElementById("s4").value);

  if (
    s1 > 100 || s2 > 100 ||
    s3 > 100 || s4 > 100 ||
    s1 < 0 || s2 < 0 ||
    s3 < 0 || s4 < 0
  ) {

    document.getElementById("avgResult").innerHTML =
      "<h3>Please enter semester scores between 0 and 100.</h3>";

    return;
  }

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

  if (inputType === "gpa") {

    if (score < 0 || score > 4) {

      results.innerHTML = `
        <h2>
          GPA must be between 0.0 and 4.0
        </h2>
      `;

      return;
    }
  }

  if (inputType === "rapor") {

    if (score < 0 || score > 100) {

      results.innerHTML = `
        <h2>
          Rapor score must be between 0 and 100
        </h2>
      `;

      return;
    }
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

    return (
      uni.rank >= minRank &&
      uni.rank <= maxRank
    );
  });

  recommended.sort(function(a, b) {
    return a.rank - b.rank;
  });

  if (recommended.length === 0) {

    recommended = universities.filter(function(uni) {
      return uni.rank >= 86;
    });
  }

  recommended = recommended.slice(0, 10);

  let html = `

    <div class="resultTitle">

      <h2>Your GPA: ${gpa.toFixed(2)}</h2>

      <p>
        Recommended QS Rank Range:
        ${minRank} - ${maxRank}
      </p>

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
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'"
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
