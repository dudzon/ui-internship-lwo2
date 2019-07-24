import {elements} from './elements.js';
export function scroll() {
  elements.then((data) => {
    const {navbar, header, links} = data;

    // smooth scrolling
    const handleScroll = (item, e) => {
      e.preventDefault();
      setActiveLink(item);
      if (item.tagName !== 'A') return;
      const id = item.getAttribute('href');
      const element = document.querySelector(id);
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop,
      });
    };

    // Header background

    const setHeaderBackground = () => {
      window.scrollY >= 100
        ? (header.style.background = 'grey')
        : (header.style.background = 'none');
    };
    //  Show currently clicked link

    const setActiveLink = (item) => {
      links.forEach((link) => link.removeAttribute('data-active'));
      item.setAttribute('data-active', 'active');
    };
    navbar.addEventListener('click', (e) => handleScroll(e.target, e));
    window.addEventListener('scroll', setHeaderBackground);
    // if user refreshes the page, calculate current header position
    window.addEventListener('load', setHeaderBackground);
  });
}
