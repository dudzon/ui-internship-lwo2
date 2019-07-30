export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      mainBlog: document.querySelector('.standard__wrapper--blog'),
      footerBlog: document.querySelector('.footer__element--second'),
    };
    res(DOMElements);
  });
});
