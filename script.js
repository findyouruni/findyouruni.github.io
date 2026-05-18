// script.js

function raporToGPA(score) {
  return (score / 100) * 4;
}

// GPA → QS rank range
function getRankRange(gpa) {

  if (gpa >= 3.9) return [1, 10];
  if (gpa >= 3.7) return [11, 20];
  if (gpa >= 3.5) return [21, 30];
  if (gpa >= 3.3) return [31, 40];
  if (gpa >= 3.1) return [41, 50];

  // GPA below 3.0
  return [90, 100];
}

// Acceptance %
function acceptanceProbability(gpa, rank) {

  // GPA below 2.0
  if (gpa < 2.0) {
    return 1;
  }

  let chance;

  // TOP 10
  if (rank <= 10) {

    chance =
      2 +
      (gpa - 2) * 2;

    chance = Math.min(chance, 10);
  }

  // TOP 50
  else if (rank <= 50) {

    chance =
      5 +
      (gpa - 2) * 4 +
      (rank / 10);

    chance = Math.min(chance, 25);
  }

  // 51–100
  else {

    chance =
      15 +
      (gpa - 2) * 7 +
      ((rank - 50) / 2);

    chance = Math.min(chance, 50);
  }

  chance = Math.round(chance);

  if (chance < 1) chance = 1;

  return chance;
}

// FIND UNIVERSITIES
function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const scoreInput =
    document.getElementById("score").value;

  const resultsDiv =
    document.getElementById("results");

  const score =
    parseFloat(scoreInput);

  // Empty input
  if (scoreInput === "" || isNaN(score)) {

    resultsDiv.innerHTML = `
      <p class="error">
        Please enter a valid score.
      </p>
    `;

    return;
  }

  // GPA validation
  if (
    inputType === "gpa" &&
    (score < 0 || score > 4)
  ) {

    resultsDiv.innerHTML = `
      <p class="error">
        GPA must be between 0 and 4.
      </p>
    `;

    return;
  }

  // Rapor validation
  if (
    inputType === "rapor" &&
    (score < 0 || score > 100)
  ) {

    resultsDiv.innerHTML = `
      <p class="error">
        Rapor score must be between 0 and 100.
      </p>
    `;

    return;
  }

  // Convert to GPA
  const gpa =
    inputType === "rapor"
      ? raporToGPA(score)
      : score;

  // Rank range
  const range =
    getRankRange(gpa);

  const minRank = range[0];
  const maxRank = range[1];

  // Filter universities
  let recommended =
    universities.filter(function(uni) {

      return (
        uni.rank >= minRank &&
        uni.rank <= maxRank
      );

    });

  // Sort by rank
  recommended.sort(function(a, b) {
    return a.rank - b.rank;
  });

  // HTML
  let html = `

    <h2>Your GPA: ${gpa.toFixed(2)}</h2>

    <h3>
      Recommended QS Rank Range:
      ${minRank} - ${maxRank}
    </h3>

    <div class="grid">

  `;

  // Cards
  recommended.forEach(function(uni) {

    const chance =
      acceptanceProbability(
        gpa,
        uni.rank
      );

    html += `

      <div class="card">

        <img
          src="${uni.logo}"
          class="logo"
          alt="${uni.name}"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'"
        >

        <h3>${uni.name}</h3>

        <p>
          QS Rank #${uni.rank}
        </p>

        <p>
          ${chance}% Acceptance Chance
        </p>

        <button
          onclick="window.open('${uni.website}', '_blank')"
        >
          Visit Website
        </button>

      </div>

    `;
  });

  html += `</div>`;

  resultsDiv.innerHTML = html;
}

// TOGGLE CALCULATOR
function toggleCalculator() {

  const calc =
    document.getElementById("calculator");

  if (
    calc.classList.contains("hidden")
  ) {

    calc.classList.remove("hidden");

  } else {

    calc.classList.add("hidden");
  }
}

// CALCULATE RAPOR
function calculateAverage() {

  const s1 =
    parseFloat(
      document.getElementById("s1").value
    ) || 0;

  const s2 =
    parseFloat(
      document.getElementById("s2").value
    ) || 0;

  const s3 =
    parseFloat(
      document.getElementById("s3").value
    ) || 0;

  const s4 =
    parseFloat(
      document.getElementById("s4").value
    ) || 0;

  const avg =
    (s1 + s2 + s3 + s4) / 4;

  const gpa =
    raporToGPA(avg);

  document.getElementById("avgResult").innerHTML = `

    <strong>Average:</strong>
    ${avg.toFixed(2)}

    <br><br>

    <strong>Estimated GPA:</strong>
    ${gpa.toFixed(2)}

  `;
}

// Make buttons work
window.onload = function() {

  const findBtn =
    document.getElementById("findBtn");

  const calcBtn =
    document.getElementById("calcBtn");

  const avgBtn =
    document.getElementById("avgBtn");

  if (findBtn) {
    findBtn.addEventListener(
      "click",
      findUniversities
    );
  }

  if (calcBtn) {
    calcBtn.addEventListener(
      "click",
      toggleCalculator
    );
  }

  if (avgBtn) {
    avgBtn.addEventListener(
      "click",
      calculateAverage
    );
  }
};
