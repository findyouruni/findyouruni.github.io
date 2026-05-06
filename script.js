function raporToGPA(score) {
  return (score / 100) * 4;
}

function acceptanceProbability(gpa, rank) {
  let base = 50 + (gpa - 3.5) * 40;

  if (rank <= 10) base *= 0.4;
  else if (rank <= 30) base *= 0.6;
  else base *= 0.8;

  return Math.max(5, Math.min(95, Math.round(base)));
}

function findUniversities() {
  const inputType = document.getElementById("inputType").value;
  let score = parseFloat(document.getElementById("score").value);
  const major = document.getElementById("major").value;
  const resultsDiv = document.getElementById("results");

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

  let gpa = inputType === "rapor" ? raporToGPA(score) : score;

  let reach = [];
  let match = [];
  let safety = [];

  universities.forEach(uni => {
    const rank = uni.majors[major];
    if (!rank) return;

    const prob = acceptanceProbability(gpa, rank);

    const data = { ...uni, rank, prob };

    if (prob >= 70) safety.push(data);
    else if (prob >= 40) match.push(data);
    else reach.push(data);
  });

  [safety, match, reach].forEach(arr =>
    arr.sort((a, b) => a.rank - b.rank)
  );

  function createCards(list) {
    return list.map(uni => `
      <div class="card">
        <img src="${uni.logo}" class="logo">
        <h3>${uni.name}</h3>
        <p>#${uni.rank} (${major})</p>
        <p>${uni.prob}% chance</p>
        <button onclick="window.open('${uni.website}', '_blank')">
          Visit Website
        </button>
      </div>
    `).join("");
  }

  resultsDiv.innerHTML = `
    <h2>Converted GPA: ${gpa.toFixed(2)}</h2>

    <h3>🟢 Safety</h3>
    <div class="grid">${createCards(safety.slice(0,10))}</div>

    <h3>✅ Match</h3>
    <div class="grid">${createCards(match.slice(0,10))}</div>

    <h3>🎯 Reach</h3>
    <div class="grid">${createCards(reach.slice(0,10))}</div>
  `;
}

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
