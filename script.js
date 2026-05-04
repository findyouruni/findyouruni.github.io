function raporToGPA(score) {
  if (score >= 90) return 4.0;
  if (score >= 85) return 3.7;
  if (score >= 80) return 3.3;
  if (score >= 75) return 3.0;
  if (score >= 70) return 2.7;
  return 2.0;
}

function acceptanceProbability(gpa, uni) {
  const diff = gpa - uni.avgGPA;
  let base = 50 + diff * 100;

  let rankFactor = 1;
  if (uni.rank <= 10) rankFactor = 0.4;
  else if (uni.rank <= 30) rankFactor = 0.6;
  else rankFactor = 0.8;

  let prob = base * rankFactor;
  return Math.max(5, Math.min(95, Math.round(prob)));
}

function classify(prob) {
  if (prob >= 70) return "Safety";
  if (prob >= 40) return "Match";
  return "Reach";
}

function generateExplanation(gpa, uni) {
  if (gpa > uni.avgGPA)
    return "Your GPA is above average, giving you a strong chance.";
  if (gpa === uni.avgGPA)
    return "You match the typical admitted student.";
  return "This is a competitive choice based on your GPA.";
}

function findUniversities() {
  const type = document.getElementById("inputType").value;
  const raw = parseFloat(document.getElementById("score").value);

  let gpa = type === "rapor" ? raporToGPA(raw) : raw;

  let safety = [], match = [], reach = [];

  universities.forEach(uni => {
    const prob = acceptanceProbability(gpa, uni);
    const category = classify(prob);

    const data = { ...uni, prob };

    if (category === "Safety") safety.push(data);
    else if (category === "Match") match.push(data);
    else reach.push(data);
  });

  const topAI = [...universities]
    .map(u => ({
      ...u,
      prob: acceptanceProbability(gpa, u)
    }))
    .sort((a, b) => b.prob - a.prob)
    .slice(0, 3);

  document.getElementById("results").innerHTML = `
    <p>Converted GPA: <b>${gpa.toFixed(2)}</b></p>

    <h2>Recommendations</h2>
    <div class="grid">
      ${topAI.map(u => `
        <div class="card">
          <h3>${u.name}</h3>
          <p>${u.country} • #${u.rank}</p>
          <p>${u.prob}% chance</p>
          <p>${generateExplanation(gpa, u)}</p>
        </div>
      `).join("")}
    </div>

    ${renderSection("Safety", safety, "safety")}
    ${renderSection("Match", match, "match")}
    ${renderSection("Reach", reach, "reach")}
  `;
}

function renderSection(title, list, type) {
  if (!list.length) return "";

  return `
    <h2>${title}</h2>
    <div class="grid">
      ${list.map(u => `
        <div class="card">
          <h3>${u.name}</h3>
          <p>#${u.rank} • ${u.country}</p>
          <p>${u.prob}%</p>
          <div class="bar">
            <div class="fill" style="width:${u.prob}%"></div>
          </div>
          <span class="badge ${type}">${type}</span>
        </div>
      `).join("")}
    </div>
  `;
}
