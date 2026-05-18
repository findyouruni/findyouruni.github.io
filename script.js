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

  return [89, 100];
}

// Acceptance chance calculation
function acceptanceProbability(gpa, rank) {

  if (gpa < 2.0) {
    return 1;
  }

  let chance =
    (rank * 0.22) +
    ((gpa - 2.0) * 4);

  chance = Math.round(chance);

  // Clamp values
  if (chance > 25) chance = 25;
  if (chance < 1) chance = 1;

  return chance;
}

// Main function
function findUniversities() {

  const inputType =
    document.getElementById("inputType").value;

  const score =
    parseFloat(document.getElementById("score").value);

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

  // Get target rank range
  const rankRange =
    getRankRange(gpa);

  const minRank = rankRange[0];
  const maxRank = rankRange[1];

  // Check if universities exists
  if (!universities || universities.length === 0) {

    resultsDiv.innerHTML = `
      <div class="error">
        University database failed to load.
      </div>
    `;

    return;
  }

  // Filter universities
  let recommended = universities.filter(uni => {

    return (
      uni &&
      uni.rank &&
      uni.name &&
      uni.website &&
      uni.rank >= minRank &&
      uni.rank <= maxRank
    );

  });

  // Sort by QS rank
  recommended.sort((a, b) => a.rank - b.rank);

  // Maximum 10 results
  recommended = recommended.slice(0, 10);

  // No universities found
  if (recommended.length === 0) {

    resultsDiv.innerHTML = `
      <div class="error">
        No universities found for this score.
      </div>
    `;

    return;
  }

  // Generate cards
  let cards = "";

  recommended.forEach(uni => {

    const acceptance =
      acceptanceProbability(gpa, uni.rank);

    cards += `

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
          <strong>Acceptance Chance:</strong>
          ${acceptance}%
        </p>

        <button onclick="window.open('${uni.website}', '_blank')">
          Visit Website
        </button>

      </div>

    `;
  });

  // Display final results
  resultsDiv.innerHTML = `

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
      ${cards}
    </div>

  `;
}

// Toggle calculator
function toggleCalculator() {

  const calculator =
    document.getElementById("calculator");

  calculator.classList.toggle("hidden");
}

// Calculate Rapor average
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

    Average Rapor Score:
    ${avg.toFixed(2)}

    <br><br>

    Estimated GPA:
    ${gpa.toFixed(2)}

  `;
}
