export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      tabs: [...document.querySelectorAll('.tab-element')],
      texts: [...document.querySelectorAll('.tabs-content__text')],
    };
    res(DOMElements);
  });
});
