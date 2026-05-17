function raporToGPA(score) {
  return (score / 100) * 4;
}

// GPA -> Recommended Rank Range
function getRankRange(gpa) {

  if (gpa >= 3.95) return [1, 10];
  if (gpa >= 3.85) return [11, 20];
  if (gpa >= 3.75) return [21, 30];
  if (gpa >= 3.65) return [31, 40];
  if (gpa >= 3.55) return [41, 50];
  if (gpa >= 3.45) return [51, 60];
  if (gpa >= 3.35) return [61, 70];
  if (gpa >= 3.25) return [71, 80];
  if (gpa >= 3.10) return [81, 90];

  return [89, 99];
}

// Acceptance Rate Formula
function acceptanceProbability(gpa, rank) {

  let base = 95 - rank;

  // GPA bonus
  base += (gpa - 3.0) * 20;

  // Extra difficulty for top universities
  if (rank <= 10) {
    base -= 25;
  } else if (rank <= 25) {
    base -= 15;
  }

  // Low GPA punishment
  if (gpa < 3.0) {
    base -= (3.0 - gpa) * 30;
  }

  // Clamp between 1 and 90
  base = Math.max(1, Math.min(90, Math.round(base)));

  return base;
}

// Find Universities
function findUniversities() {

  const inputType = document.getElementById("inputType").value;
  const scoreInput = parseFloat(
    document.getElementById("score").value
  );

  const resultsDiv = document.getElementById("results");

  // Validation
  if (isNaN(scoreInput)) {
    resultsDiv.innerHTML =
      `<p class="error">Please enter a valid score.</p>`;
    return;
  }

  let gpa;

  if (inputType === "gpa") {

    if (scoreInput < 0 || scoreInput > 4) {
      resultsDiv.innerHTML =
        `<p class="error">GPA must be between 0 and 4.</p>`;
      return;
    }

    gpa = scoreInput;

  } else {

    if (scoreInput < 0 || scoreInput > 100) {
      resultsDiv.innerHTML =
        `<p class="error">Rapor score must be between 0 and 100.</p>`;
      return;
    }

    gpa = raporToGPA(scoreInput);
  }

  const [minRank, maxRank] = getRankRange(gpa);

  let recommended = universities.filter(uni =>
    uni.generalRank >= minRank &&
    uni.generalRank <= maxRank
  );

  recommended.sort((a, b) =>
    a.generalRank - b.generalRank
  );

  recommended = recommended.slice(0, 10);

  if (recommended.length === 0) {
    resultsDiv.innerHTML =
      `<p>No universities found.</p>`;
    return;
  }

  resultsDiv.innerHTML = `

    <div class="summary">

      <h2>Your Estimated GPA: ${gpa.toFixed(2)}</h2>

      <p>
        Recommended QS Rank Range:
        <strong>#${minRank} - #${maxRank}</strong>
      </p>

    </div>

    <div class="grid">

      ${recommended.map(uni => {

        const chance =
          acceptanceProbability(gpa, uni.generalRank);

        return `

          <div class="card">

            <img
              src="${uni.logo}"
              alt="${uni.name}"
              class="logo"
            >

            <h3>${uni.name}</h3>

            <p>
              <strong>QS Rank:</strong>
              #${uni.generalRank}
            </p>

            <p class="chance">
              Acceptance Rate:
              ${chance}%
            </p>

            <button onclick="window.open('${uni.website}', '_blank')">
              Visit Website
            </button>

          </div>

        `;

      }).join("")}

    </div>

  `;
}

// Toggle Calculator
function toggleCalculator() {

  const calc = document.getElementById("calculator");

  calc.classList.toggle("hidden");
}

// Calculate Rapor Average
function calculateAverage() {

  const s1 = parseFloat(document.getElementById("s1").value) || 0;
  const s2 = parseFloat(document.getElementById("s2").value) || 0;
  const s3 = parseFloat(document.getElementById("s3").value) || 0;
  const s4 = parseFloat(document.getElementById("s4").value) || 0;

  const avg = (s1 + s2 + s3 + s4) / 4;

  const gpa = raporToGPA(avg);

  document.getElementById("avgResult").innerHTML = `

    <h3>Results</h3>

    <p>Average Rapor Score: <strong>${avg.toFixed(2)}</strong></p>

    <p>Estimated GPA: <strong>${gpa.toFixed(2)}</strong></p>

  `;
}
