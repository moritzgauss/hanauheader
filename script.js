const startDate = new Date("2020-02-19");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const counterEl = document.getElementById("day-counter");
const digits = diffDays.toString().padStart(5, "0");

counterEl.innerHTML = digits.split('').map(d => `<span>${d}</span>`).join('');
