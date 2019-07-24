export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      gallery: document.querySelector('.gallery'),
      popup: document.querySelector('.popup'),
      body: document.querySelector('body'),
      overlay: document.querySelector('.overlay'),
    };
    res(DOMElements);
  });
});
