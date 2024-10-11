import 'bulma';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
    const faqItems = document.querySelectorAll<HTMLElement>('.faq-item, .section');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();

            faqItems.forEach(item => {
                const question = item.querySelector('summary')?.textContent?.toLowerCase() || '';
                const answer = item.querySelector('p')?.textContent?.toLowerCase() || '';

                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.classList.remove('hidden');
                    item.style.display = '';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });
        });
    }
});

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
      const p = detail.querySelector("p");

      if (p) {
          if (detail.open) {
              p.style.height = `${p.scrollHeight}px`;
              p.style.opacity = '1';
          } else {
              p.style.opacity = '0';
              p.style.height = '0';

              setTimeout(() => {
                  p.style.transition = 'none';
                  p.style.height = '';
                  p.style.opacity = '';
                  p.style.transition = '';
              }, 100);
          }
      }
  });
});
