(function() {
  const init = () => {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
      card.addEventListener('click', function() {
        const list = this.querySelector('.service-list');
        const isHidden = list.classList.contains('hidden');

        // Close all other cards
        cards.forEach(otherCard => {
          if (otherCard !== this) {
            otherCard.querySelector('.service-list').classList.add('hidden');
          }
        });

        // Toggle current card
        if (isHidden) {
          list.classList.remove('hidden');
        } else {
          list.classList.add('hidden');
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();