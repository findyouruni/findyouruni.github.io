function raporToGPA(score) {
  return (score / 100) * 4;
}


function getRankRange(gpa) {

  if (gpa >= 3.95) return [1, 15];
  if (gpa >= 3.85) return [10, 25];
  if (gpa >= 3.75) return [20, 40];
  if (gpa >= 3.65) return [30, 50];
  if (gpa >= 3.55) return [40, 60];
  if (gpa >= 3.45) return [50, 70];
  if (gpa >= 3.35) return [60, 80];
  if (gpa >= 3.20) return [70, 90];
  if (gpa >= 3.00) return [80, 99];

 
  return [89, 99];
}


function acceptanceProbability(gpa, rank) {

 
  let chance = 100 - rank;

 
  chance += (gpa - 3.0) * 22;

 
  if (rank <= 10) {
    chance *= 0.45;
  }
  else if (rank <= 20) {
    chance *= 0.60;
  }
  else if (rank <= 40) {
    chance *= 0.75;
  }

  
  if (gpa < 3.0) {
    chance *= 0.35;
  }

  if (gpa < 2.5) {
    chance *= 0.50;
  }


  chance = Math.max(1, Math.min(90, Math.round(chance)));

  return chance;
}

function findUniversities() {

  const inputType = document.getElementById("inputType").value;
  let score = parseFloat(document.getElementById("score").value);

  const major = document.getElementById("major").value;

  const resultsDiv = document.getElementById("results");

  
  if (isNaN(score)) {
    resultsDiv.innerHTML =
      "<p>Please enter a valid score.</p>";
    return;
  }

  if (inputType === "gpa" && (score < 0 || score > 4)) {
    resultsDiv.innerHTML =
      "<p>GPA must be between 0 and 4.</p>";
    return;
  }

  if (inputType === "rapor" && (score < 0 || score > 100)) {
    resultsDiv.innerHTML =
      "<p>Rapor score must be between 0 and 100.</p>";
    return;
  }

  
  const gpa =
    inputType === "rapor"
      ? raporToGPA(score)
      : score;

  
  const [minRank, maxRank] = getRankRange(gpa);


  let recommended = universities.filter((uni) => {

    const rank = uni.rankpermajor[major];


    if (!rank || rank === 999) return false;

    return rank >= minRank && rank <= maxRank;
  });

 
  recommended.sort((a, b) => {
    return a.rankpermajor[major]
      - b.rankpermajor[major];
  });


  if (recommended.length < 10) {

    const extra = universities.filter((uni) => {

      const rank = uni.rankpermajor[major];

      if (!rank || rank === 999) return false;

      return rank >= minRank - 15
        && rank <= maxRank + 15;
    });

    recommended = extra.sort((a, b) =>
      a.rankpermajor[major]
      - b.rankpermajor[major]
    );
  }

 
  recommended = recommended.slice(0, 10);


  const cards = recommended.map((uni) => {

    const rank = uni.rankpermajor[major];

    const acceptance =
      acceptanceProbability(gpa, rank);

    return `
      <div class="card">

        <img
          src="${uni.logo}"
          class="logo"
          alt="${uni.name}"
        >

        <h2>${uni.name}</h2>

        <p>
          <strong>Country:</strong>
          ${uni.country}
        </p>

        <p>
          <strong>${major.replace("_", " ")} Rank:</strong>
          #${rank}
        </p>

        <p>
          <strong>Estimated Acceptance Rate:</strong>
          ${acceptance}%
        </p>

        <a href="${uni.website}" target="_blank">
          <button>
            Visit Website
          </button>
        </a>

      </div>
    `;
  }).join("");

  resultsDiv.innerHTML = `

    <div class="summary">

      <h2>Your Estimated GPA:
        ${gpa.toFixed(2)}
      </h2>

      <p>
        Recommended QS Rank Range:
        <strong>
          ${minRank} - ${maxRank}
        </strong>
      </p>

    </div>

    <div class="grid">
      ${cards}
    </div>

  `;
}


function toggleCalculator() {

  const calc =
    document.getElementById("calculator");

  calc.classList.toggle("hidden");
}


function calculateAverage() {

  const s1 =
    +document.getElementById("s1").value || 0;

  const s2 =
    +document.getElementById("s2").value || 0;

  const s3 =
    +document.getElementById("s3").value || 0;

  const s4 =
    +document.getElementById("s4").value || 0;

  const avg = (s1 + s2 + s3 + s4) / 4;

  const gpa = raporToGPA(avg);

  document.getElementById("avgResult").innerHTML = `
    <strong>Average Rapor:</strong>
    ${avg.toFixed(2)}
    <br>
    <strong>Estimated GPA:</strong>
    ${gpa.toFixed(2)}
  `;
}
