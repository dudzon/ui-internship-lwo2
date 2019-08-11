import {elements} from './elements.js';
export function scroll() {
  elements.then((data) => {
    const {navbar, header, links, sections} = data;

    // smooth scrolling
    const handleActiveLink = (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'A') return;
      const id = e.target.getAttribute('href');
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

    const findLinkedSection = (sectionList, sectionElement) => {
      const highlightedLink = Object.keys(sectionList).find(
          (item) => item === sectionElement
      );
      return sectionList[highlightedLink];
    };
    //  Highlight proper link associated with currently scrolled section

    const showActiveLink = (linkList, sectionList) => {
      const scrollCurrentPosition = document.documentElement.scrollTop;

      for (let link of linkList) {
        const sectionNames = link.getAttribute('href');
        const currentSection = findLinkedSection(sectionList, sectionNames);
        if (
          currentSection.offsetTop - currentSection.scrollHeight <=
            scrollCurrentPosition &&
          currentSection.offsetTop + currentSection.scrollHeight >
            scrollCurrentPosition
        ) {
          link.setAttribute('data-active', 'active');
        } else {
          link.removeAttribute('data-active');
        }
      }
    };

    navbar.addEventListener('click', (e) => handleActiveLink(e));
    window.addEventListener('scroll', setHeaderBackground);
    window.addEventListener('scroll', () => showActiveLink(links, sections));
    // if user refreshes the page, calculate current header position
    window.addEventListener('load', setHeaderBackground);
  });
}
