// Convert Rapor → GPA
function raporToGPA(score) {

  return (score / 100) * 4;
}

// GPA → Recommended QS Rank Range
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

// Acceptance Rate Formula
function acceptanceProbability(gpa, rank) {

  let chance =
    (rank * 0.22) +
    ((gpa - 2.0) * 4);

  chance = Math.round(chance);

  // Clamp values
  if (chance > 25) chance = 25;
  if (chance < 1) chance = 1;

  return chance;
}

// Main University Finder
function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const score =
    parseFloat(
      document.getElementById("score").value
    );

  const resultsDiv =
    document.getElementById("results");

  // Empty input
  if (isNaN(score)) {

    resultsDiv.innerHTML = `

      <div class="error">
        Please enter a valid score.
      </div>

    `;

    return;
  }

  // GPA validation
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

  // Rapor validation
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

  // Convert to GPA
  const gpa =
    inputType === "rapor"
      ? raporToGPA(score)
      : score;

  // Check database
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

  // Get rank range
  const [minRank, maxRank] =
    getRankRange(gpa);

  // Filter universities
  let recommended =
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

  // Sort by rank
  recommended.sort((a, b) => {

    return a.rank - b.rank;

  });

  // Top 10 only
  recommended =
    recommended.slice(0, 10);

  // No results
  if (recommended.length === 0) {

    resultsDiv.innerHTML = `

      <div class="error">
        No universities found.
      </div>

    `;

    return;
  }

  // Create HTML
  let html = `

    <div class="summary">

      <h2>
        Your GPA:
        ${gpa.toFixed(2)}
      </h2>

      <p>
        Recommended QS Rank Range:
        ${minRank} - ${maxRank}
      </p>

    </div>

    <div class="grid">

  `;

  // Generate cards
  recommended.forEach(uni => {

    const acceptance =
      acceptanceProbability(
        gpa,
        uni.rank
      );

    html += `

      <div class="card">

        <div class="rank-badge">
          #${uni.rank}
        </div>

        <h2>
          ${uni.name}
        </h2>

        <p>
          <strong>QS Rank:</strong>
          #${uni.rank}
        </p>

        <p>
          <strong>Acceptance Chance:</strong>
          ${acceptance}%
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

// Toggle Calculator
function toggleCalculator() {

  const calculator =
    document.getElementById("calculator");

  if (!calculator) return;

  calculator.classList.toggle("hidden");
}

// Calculate Average
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

  const average =
    (s1 + s2 + s3 + s4) / 4;

  const gpa =
    raporToGPA(average);

  document.getElementById("avgResult").innerHTML = `

    <div class="card">

      <h2>
        Results
      </h2>

      <p>
        <strong>Average Rapor:</strong>
        ${average.toFixed(2)}
      </p>

      <p>
        <strong>Estimated GPA:</strong>
        ${gpa.toFixed(2)}
      </p>

    </div>

  `;
}

// Wait until page loads
document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button =
      document.getElementById("findBtn");

    if (button) {

      button.addEventListener(
        "click",
        findUniversities
      );
    }
  }
);
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
