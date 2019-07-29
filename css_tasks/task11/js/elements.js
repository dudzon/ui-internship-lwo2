export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      firstCarousel: document.querySelector(
          '.decoration__wrapper--carousel-first'
      ),
      secondCarousel: document.querySelector(
          '.decoration__wrapper--carousel-second'
      ),
      firstCarouselItems: [...document.querySelectorAll(
          '.decoration__wrapper--carousel-first .carousel-item'
      )],
      secondCarouselItems: [...document.querySelectorAll(
          '.decoration__wrapper--carousel-second .carousel-item'
      )],
    };
    res(DOMElements);
  });
});
