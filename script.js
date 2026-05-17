function raporToGPA(score) {
  return (score / 100) * 4;
}

// GPA → Recommended QS rank range
function getRankRange(gpa) {
  if (gpa >= 3.9) return [1, 10];
  if (gpa >= 3.7) return [11, 20];
  if (gpa >= 3.5) return [21, 35];
  if (gpa >= 3.3) return [36, 50];
  if (gpa >= 3.0) return [51, 70];
  if (gpa >= 2.7) return [71, 85];
  return [86, 100];
}

// Acceptance formula
function acceptanceProbability(gpa, rank) {

  // GPA lower than 2.0
  if (gpa < 2.0) {
    return 1;
  }

  let chance;

  // TOP 10
  if (rank <= 10) {

    chance =
      1 +
      (gpa - 2.0) * 3 -
      (11 - rank) * 0.2;

    chance = Math.min(chance, 10);

  }

  // TOP 50
  else if (rank <= 50) {

    chance =
      5 +
      (gpa - 2.0) * 7 -
      (51 - rank) * 0.15;

    chance = Math.min(chance, 25);

  }

  // 51–100
  else {

    chance =
      15 +
      (gpa - 2.0) * 10 -
      (101 - rank) * 0.1;

    chance = Math.min(chance, 50);

  }

  // Clamp minimum
  chance = Math.max(1, Math.round(chance));

  return chance;
}

function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const input =
    parseFloat(
      document.getElementById("score").value
    );

  const resultsDiv =
    document.getElementById("results");

  // Empty input
  if (isNaN(input)) {

    resultsDiv.innerHTML =
      `<p class="error">
        Please enter a valid score.
      </p>`;

    return;
  }

  // GPA validation
  if (inputType === "gpa") {

    if (input < 0 || input > 4) {

      resultsDiv.innerHTML =
        `<p class="error">
          GPA must be between 0 and 4.
          Please retry.
        </p>`;

      return;
    }
  }

  // Rapor validation
  if (inputType === "rapor") {

    if (input < 0 || input > 100) {

      resultsDiv.innerHTML =
        `<p class="error">
          Rapor score must be between 0 and 100.
          Please retry.
        </p>`;

      return;
    }
  }

  // Convert to GPA
  const gpa =
    inputType === "rapor"
      ? raporToGPA(input)
      : input;

  // Rank range
  const [minRank, maxRank] =
    getRankRange(gpa);

  // ONLY universities inside range
  let recommended =
    universities.filter(uni =>
      uni.rank >= minRank &&
      uni.rank <= maxRank
    );

  // Sort by rank
  recommended.sort((a, b) =>
    a.rank - b.rank
  );

  // Limit to 10
  recommended = recommended.slice(0, 10);

  // No results
  if (recommended.length === 0) {

    resultsDiv.innerHTML =
      `<p class="error">
        No universities found.
      </p>`;

    return;
  }

  // Create cards
  resultsDiv.innerHTML = `

    <h2>Your GPA: ${gpa.toFixed(2)}</h2>

    <h3>
      Recommended QS Rank Range:
      ${minRank} - ${maxRank}
    </h3>

    <div class="grid">

      ${recommended.map(uni => {

        const chance =
          acceptanceProbability(gpa, uni.rank);

        return `

          <div class="card">

            <img
              src="${uni.logo}"
              alt="${uni.name}"
              class="logo"
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

      }).join("")}

    </div>
  `;
}

// Toggle calculator
function toggleCalculator() {

  const calc =
    document.getElementById("calculator");

  calc.classList.toggle("hidden");
}

// Calculate rapor average
function calculateAverage() {

  const s1 =
    parseFloat(document.getElementById("s1").value) || 0;

  const s2 =
    parseFloat(document.getElementById("s2").value) || 0;

  const s3 =
    parseFloat(document.getElementById("s3").value) || 0;

  const s4 =
    parseFloat(document.getElementById("s4").value) || 0;

  const avg =
    (s1 + s2 + s3 + s4) / 4;

  const gpa =
    raporToGPA(avg);

  document.getElementById("avgResult").innerHTML = `

    <strong>Average Rapor:</strong>
    ${avg.toFixed(2)}
    <br>

    <strong>Estimated GPA:</strong>
    ${gpa.toFixed(2)}

  `;
}
