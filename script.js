// script.js
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.photo-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 200);
  });
});
