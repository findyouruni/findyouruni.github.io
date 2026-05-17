function raporToGPA(score) {
  return (score / 100) * 4;
}

// GPA → rank range
function getRankRange(gpa) {
  if (gpa >= 4.0) return [1, 10];
  if (gpa >= 3.9) return [11, 20];
  if (gpa >= 3.8) return [21, 30];
  if (gpa >= 3.7) return [31, 40];
  if (gpa >= 3.6) return [41, 50];
  if (gpa >= 3.5) return [51, 60];
  if (gpa >= 3.4) return [61, 70];
  if (gpa >= 3.3) return [71, 80];
  if (gpa >= 3.2) return [81, 90];
  if (gpa >= 3.1) return [91, 99];

  return [89, 99];
}

// Acceptance formula
function acceptanceProbability(gpa, rank) {

  // GPA below 3.0
  if (gpa < 3.0) {
    return 1;
  }

  // Top 10 custom rates
  if (rank >= 1 && rank <= 10 && gpa >= 4.0) {
    return Math.min(90, 3 + (rank * 2));
  }

  // General formula
  let chance = 95 - rank;

  // GPA bonus
  chance += (gpa - 3.0) * 20;

  // Clamp
  chance = Math.max(1, Math.min(89, Math.round(chance)));

  return chance;
}

function findUniversities() {

  const inputType = document.getElementById("inputType").value;
  let score = parseFloat(document.getElementById("score").value);
  const major = document.getElementById("major").value;
  const resultsDiv = document.getElementById("results");

  // Validation
  if (isNaN(score)) {
    resultsDiv.innerHTML = "<p>Please enter a valid score.</p>";
    return;
  }

  if (inputType === "gpa" && (score < 0 || score > 4)) {
    resultsDiv.innerHTML = "<p>GPA must be between 0.0 and 4.0</p>";
    return;
  }

  if (inputType === "rapor" && (score < 0 || score > 100)) {
    resultsDiv.innerHTML = "<p>Rapor must be between 0 and 100</p>";
    return;
  }

  // Convert rapor → GPA
  let gpa = inputType === "rapor"
    ? raporToGPA(score)
    : score;

  // Get allowed rank range
  const [minRank, maxRank] = getRankRange(gpa);

  // Filter universities
  let recommended = universities.filter(uni => {

    const rank = uni.rankpermajor[major];

    if (!rank || rank === 999) return false;

    return rank >= minRank && rank <= maxRank;
  });

  // Sort by rank
  recommended.sort((a, b) =>
    a.rankpermajor[major] - b.rankpermajor[major]
  );

  // Only 10 universities
  recommended = recommended.slice(0, 10);

  // Generate cards
  function createCards(list) {

    if (list.length === 0) {
      return "<p>No universities found in this GPA range.</p>";
    }

    return list.map(uni => {

      const rank = uni.rankpermajor[major];

      const prob = acceptanceProbability(gpa, rank);

      return `
        <div class="card">

          <img src="${uni.logo}" class="logo">

          <h3>${uni.name}</h3>

          <p><strong>Country:</strong> ${uni.country}</p>

          <p>
            <strong>${major.replace("_", " ")} Rank:</strong>
            #${rank}
          </p>

          <p>
            <strong>Acceptance Rate:</strong>
            ${prob}%
          </p>

          <button onclick="window.open('${uni.website}', '_blank')">
            Visit Website
          </button>

        </div>
      `;
    }).join("");
  }

  resultsDiv.innerHTML = `

    <h2>Your GPA: ${gpa.toFixed(2)}</h2>

    <h3>
      Recommended Universities
      (Rank ${minRank}-${maxRank})
    </h3>

    <div class="grid">
      ${createCards(recommended)}
    </div>

  `;
}

// KEEPING RAPOR CALCULATOR
function toggleCalculator() {
  const calc = document.getElementById("calculator");
  calc.classList.toggle("hidden");
}

function calculateAverage() {

  const s1 = +document.getElementById("s1").value || 0;
  const s2 = +document.getElementById("s2").value || 0;
  const s3 = +document.getElementById("s3").value || 0;
  const s4 = +document.getElementById("s4").value || 0;

  const avg = (s1 + s2 + s3 + s4) / 4;

  document.getElementById("avgResult").innerText =
    "Average: " + avg.toFixed(2);
}
