function raporToGPA(score) {
  return (score / 100) * 4;
}

function getRankRange(gpa) {

  if (gpa >= 3.9) return [1, 15];
  if (gpa >= 3.7) return [10, 25];
  if (gpa >= 3.5) return [20, 40];
  if (gpa >= 3.3) return [35, 55];
  if (gpa >= 3.1) return [50, 70];
  if (gpa >= 2.8) return [65, 85];
  if (gpa >= 2.5) return [75, 95];
  if (gpa >= 2.0) return [85, 100];

  return [90, 100];
}

function acceptanceProbability(gpa, rank) {

  let chance =
    (rank * 0.22) +
    ((gpa - 2.0) * 4);

  chance = Math.round(chance);

  if (chance > 25) chance = 25;
  if (chance < 1) chance = 1;

  return chance;
}

function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const scoreInput =
    document.getElementById("score");

  const resultsDiv =
    document.getElementById("results");

  const score =
    parseFloat(scoreInput.value);

  // Validation
  if (isNaN(score)) {

    resultsDiv.innerHTML = `
      <div class="error">
        Please enter a score.
      </div>
    `;

    return;
  }

  if (inputType === "gpa") {

    if (score < 0 || score > 4) {

      resultsDiv.innerHTML = `
        <div class="error">
          GPA must be between 0 and 4.
        </div>
      `;

      return;
    }
  }

  if (inputType === "rapor") {

    if (score < 0 || score > 100) {

      resultsDiv.innerHTML = `
        <div class="error">
          Rapor score must be between 0 and 100.
        </div>
      `;

      return;
    }
  }

  // GPA conversion
  const gpa =
    inputType === "rapor"
      ? raporToGPA(score)
      : score;

  // Safety check
  if (
    typeof universities === "undefined" ||
    !Array.isArray(universities)
  ) {

    resultsDiv.innerHTML = `
      <div class="error">
        data.js failed to load.
      </div>
    `;

    return;
  }

  // Rank range
  const [minRank, maxRank] =
    getRankRange(gpa);

  // Filter
  const recommended =
    universities.filter(uni => {

      return (
        uni &&
        uni.name &&
        uni.rank &&
        uni.website &&
        uni.rank >= minRank &&
        uni.rank <= maxRank
      );
    });

  // Empty
  if (recommended.length === 0) {

    resultsDiv.innerHTML = `
      <div class="error">
        No universities found.
      </div>
    `;

    return;
  }

  // Build cards
  let html = `

    <div class="summary">

      <h2>
        GPA: ${gpa.toFixed(2)}
      </h2>

      <p>
        Recommended QS Range:
        ${minRank} - ${maxRank}
      </p>

    </div>

    <div class="grid">
  `;

  recommended.slice(0, 10).forEach(uni => {

    const chance =
      acceptanceProbability(gpa, uni.rank);

    html += `

      <div class="card">

        <div class="rank-badge">
          #${uni.rank}
        </div>

        <h2>${uni.name}</h2>

        <p>
          <strong>QS Rank:</strong>
          #${uni.rank}
        </p>

        <p>
          <strong>Acceptance Rate:</strong>
          ${chance}%
        </p>

        <button onclick="window.open('${uni.website}', '_blank')">
          Visit Website
        </button>

      </div>
    `;
  });

  html += `</div>`;

  resultsDiv.innerHTML = html;
}

// Button listener
document.addEventListener("DOMContentLoaded", () => {

  const button =
    document.getElementById("findBtn");

  if (button) {

    button.addEventListener(
      "click",
      findUniversities
    );
  }
});
