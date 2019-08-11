export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      service: document.querySelector('.service'),
      image: [...document.querySelectorAll('.service__element img')],
      gallery: document.querySelector('.gallery'),
      popup: document.querySelector('.popup'),
      body: document.querySelector('body'),
      overlay: document.querySelector('.overlay'),
    };
    res(DOMElements);
  });
});
