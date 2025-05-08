const startDate = new Date("2020-02-19");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const counterEl = document.getElementById("day-counter");
const digits = diffDays.toString().padStart(5, "0");

counterEl.innerHTML = digits.split('').map(d => `<span>${d}</span>`).join('');

// Add event listeners for mobile click functionality
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove 'is-flipped' class from other cards
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove('is-flipped');
      }
    });

    // Toggle 'is-flipped' class on the clicked card
    card.classList.toggle('is-flipped');
  });
});