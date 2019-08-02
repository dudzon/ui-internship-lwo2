export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      navbar: document.querySelector('.header__nav'),
      header: document.querySelector('.header'),
      links: [...document.querySelectorAll('.header-nav__item a')],
      sections: {
        '#about': document.querySelector('#about'),
        '#service': document.querySelector('#service'),
        '#work': document.querySelector('#work'),
        '#blog': document.querySelector('#blog'),
        '#contact': document.querySelector('#contact'),
      },
    };
    res(DOMElements);
  });
});
