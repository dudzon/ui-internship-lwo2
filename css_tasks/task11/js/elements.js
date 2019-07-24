export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      service: document.querySelector('.service'),
      image: [...document.querySelectorAll('.service__element img')],
    };
    res(DOMElements);
  });
});
