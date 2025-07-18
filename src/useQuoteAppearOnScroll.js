import { useEffect } from 'react';

export function useQuoteAppearOnScroll() {
  useEffect(() => {
    const quotes = document.querySelectorAll('.lain-quote');
    const onScroll = () => {
      quotes.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
