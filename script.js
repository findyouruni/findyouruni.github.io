function raporToGPA(score) {
  if (score >= 90) return 4.0;
  if (score >= 85) return 3.7;
  if (score >= 80) return 3.3;
  if (score >= 75) return 3.0;
  if (score >= 70) return 2.7;
  return 2.0;
}

function acceptanceProbability(gpa, uni, major = "general") {
  const diff = gpa - uni.avgGPA;
  let base = 50 + diff * 100;

  let rankFactor = uni.rank <= 10 ? 0.4 : uni.rank <= 30 ? 0.6 : 0.8;
  let prob = base * rankFactor;

  if (major === "cs") prob *= 0.85;
  if (major === "engineering") prob *= 0.9;
  if (major === "medicine") prob *= 0.8;
  if (major === "business") prob *= 0.95;

  return Math.max(5, Math.min(95, Math.round(prob)));
}

function classify(prob) {
  if (prob >= 70) return "Safety";
  if (prob >= 40) return "Match";
  return "Reach";
}

function findUniversities() {
  const type = document.getElementById("inputType").value;
  const raw = parseFloat(document.getElementById("score").value);
  const major = document.getElementById("major").value;

  let gpa = type === "rapor" ? raporToGPA(raw) : raw;

  let safety = [], match = [], reach = [];

  universities.forEach(uni => {
    if (major !== "general" && !uni.majors[major]) return;

    const prob = acceptanceProbability(gpa, uni, major);
    const category = classify(prob);

    const data = { ...uni, prob };

    if (category === "Safety") safety.push(data);
    else if (category === "Match") match.push(data);
    else reach.push(data);
  });

  const topAI = [...universities]
    .map(u => ({
      ...u,
      prob: acceptanceProbability(gpa, u, major)
    }))
    .sort((a, b) => b.prob - a.prob)
    .slice(0, 5);

  document.getElementById("results").innerHTML = `
    <p>GPA: <b>${gpa.toFixed(2)}</b> | Major: <b>${major.toUpperCase()}</b></p>

    <h2>Recommendations</h2>
    <div class="grid">
      ${topAI.map(u => `
        <div class="card">
          <h3>${u.name}</h3>
          <p>#${u.rank}</p>
          <p>${u.prob}% chance</p>
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
          <p>#${u.rank}</p>
          <p>${u.prob}%</p>
          <div class="bar"><div class="fill" style="width:${u.prob}%"></div></div>
          <span class="badge ${type}">${type}</span>
        </div>
      `).join("")}
    </div>
  `;
}
