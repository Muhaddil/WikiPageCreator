import '../../startup/minimal';
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
