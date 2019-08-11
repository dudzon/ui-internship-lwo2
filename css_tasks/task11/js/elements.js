export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      service: document.querySelector('.service'),
      image: [...document.querySelectorAll('.service__element img')],
      gallery: document.querySelector('.gallery'),
      popup: document.querySelector('.popup'),
      body: document.querySelector('body'),
      overlay: document.querySelector('.overlay'),
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
