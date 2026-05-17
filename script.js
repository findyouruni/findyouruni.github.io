// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {

  // Toggle calculator
  window.toggleCalculator = function () {

    const calc = document.getElementById("calculator");

    calc.classList.toggle("hidden");
  };

  // Convert rapor score to GPA
  function raporToGPA(score) {
    return (score / 100) * 4;
  }

  // GPA -> QS rank range
  function getRankRange(gpa) {

    if (gpa >= 3.95) return [1, 10];
    if (gpa >= 3.85) return [11, 20];
    if (gpa >= 3.75) return [21, 30];
    if (gpa >= 3.65) return [31, 40];
    if (gpa >= 3.55) return [41, 50];
    if (gpa >= 3.45) return [51, 60];
    if (gpa >= 3.35) return [61, 70];
    if (gpa >= 3.25) return [71, 80];
    if (gpa >= 3.1) return [81, 90];

    return [89, 99];
  }

  // Acceptance chance formula
  function acceptanceProbability(gpa, rank) {

    let chance;

    if (gpa < 3.0) {

      chance = 20 - ((rank - 89) * 1.5);

    } else {

      chance = 92 - rank;
      chance += (gpa - 3.0) * 25;
    }

    chance = Math.round(chance);

    chance = Math.max(1, Math.min(90, chance));

    return chance;
  }

  // Calculate rapor average
  window.calculateAverage = function () {

    const s1 = Number(document.getElementById("s1").value) || 0;
    const s2 = Number(document.getElementById("s2").value) || 0;
    const s3 = Number(document.getElementById("s3").value) || 0;
    const s4 = Number(document.getElementById("s4").value) || 0;

    const avg = (s1 + s2 + s3 + s4) / 4;

    const gpa = raporToGPA(avg);

    document.getElementById("avgResult").innerHTML = `
      <h3>Average Score: ${avg.toFixed(2)}</h3>
      <h3>Converted GPA: ${gpa.toFixed(2)}</h3>
    `;
  };

  // Main university finder
  window.findUniversities = function () {

    const inputType =
      document.getElementById("inputType").value;

    const score =
      parseFloat(document.getElementById("score").value);

    const resultsDiv =
      document.getElementById("results");

    // Validation
    if (isNaN(score)) {

      resultsDiv.innerHTML = `
        <div class="error">
          Please enter a valid score.
        </div>
      `;

      return;
    }

    // GPA validation
    if (
      inputType === "gpa" &&
      (score < 0 || score > 4)
    ) {

      resultsDiv.innerHTML = `
        <div class="error">
          GPA must be between 0 and 4.
        </div>
      `;

      return;
    }

    // Rapor validation
    if (
      inputType === "rapor" &&
      (score < 0 || score > 100)
    ) {

      resultsDiv.innerHTML = `
        <div class="error">
          Rapor score must be between 0 and 100.
        </div>
      `;

      return;
    }

    // Convert to GPA
    const gpa =
      inputType === "rapor"
        ? raporToGPA(score)
        : score;

    // Rank range
    const [minRank, maxRank] =
      getRankRange(gpa);

    // Filter universities
    let recommended = universities.filter((uni) => {

      return (
        uni.rank >= minRank &&
        uni.rank <= maxRank
      );

    });

    // Sort
    recommended.sort((a, b) => a.rank - b.rank);

    // Top 10 only
    recommended = recommended.slice(0, 10);

    // Empty results
    if (recommended.length === 0) {

      resultsDiv.innerHTML = `
        <div class="error">
          No universities found.
        </div>
      `;

      return;
    }

    // Generate HTML
    let html = `
      <div class="summary">

        <h2>Your GPA: ${gpa.toFixed(2)}</h2>

        <p>
          Recommended QS Rank Range:
          ${minRank} - ${maxRank}
        </p>

      </div>

      <div class="grid">
    `;

    recommended.forEach((uni) => {

      const probability =
        acceptanceProbability(gpa, uni.rank);

      html += `
        <div class="card">

          <img
            src="${uni.logo}"
            class="logo"
            alt="${uni.name}"
          >

          <h3>${uni.name}</h3>

          <p>
            <strong>QS Rank:</strong>
            #${uni.rank}
          </p>

          <p>
            <strong>Acceptance Chance:</strong>
            ${probability}%
          </p>

          <button onclick="window.open('${uni.website}', '_blank')">
            Visit Website
          </button>

        </div>
      `;
    });

    html += `</div>`;

    resultsDiv.innerHTML = html;
  };

});
