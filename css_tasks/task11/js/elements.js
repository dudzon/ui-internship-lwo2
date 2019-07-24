export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      navbar: document.querySelector('.header__nav'),
    };
    res(DOMElements);
  });
});
