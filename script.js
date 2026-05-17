rToGPA(score) {
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
        `<p class="error">Rapor score
