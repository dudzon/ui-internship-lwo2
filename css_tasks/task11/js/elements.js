export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      navbar: document.querySelector('.header__nav'),
      header: document.querySelector('.header'),
      links: [...document.querySelectorAll('.header-nav__item a')],
    };
    res(DOMElements);
  });
});
