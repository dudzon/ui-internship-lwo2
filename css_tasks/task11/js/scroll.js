import {elements} from './elements.js';
export function scroll() {
  elements.then((data) => {
    const {navbar} = data;

    navbar.addEventListener('click', (e) => handleScroll(e.target, e));

    const handleScroll = (item, e) => {
      e.preventDefault();
      if (item.tagName !== 'A') return;
      const id = item.getAttribute('href');
      const element = document.querySelector(id);
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
      });
    };
  });
}
