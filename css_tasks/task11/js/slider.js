/* eslint-disable max-len */

// Probably it could be simplified

import {elements} from './elements.js';
import {constants} from './constants.js';
export function slider() {
  elements.then(
      ({
        firstCarousel,
        secondCarousel,
        firstCarouselItems,
        secondCarouselItems,
      }) => {
        let {slideIndex} = constants;

        const handleRightArrow = (e, carouselItems) => {
          if (!e.target.classList.contains('decoration-carousel__arrow--right')) {
            return;
          }
          handleSlides(1, carouselItems, 'forward');
        };
        const handleLeftArrow = (e, carouselItems) => {
          if (!e.target.classList.contains('decoration-carousel__arrow--left')) {
            return;
          }
          handleSlides(-1, carouselItems, 'backward');
        };

        // Move slides
        const handleSlides = (n, items, direction) => {
          showSlides((slideIndex += n), items, direction);
        };
        const showSlides = (n, items, direction) => {
          let i;

          if (n > items.length) {
            slideIndex = 1;
          }
          if (n < 1) {
            slideIndex = items.length;
          }
          for (i = 0; i < items.length; i++) {
          // it's not superhandy, should be rewritten somehow :)
            items[i].classList.remove('active', 'forward', 'backward');
          }
          items[slideIndex - 1].classList.add('active');

        //   Detect the direction of the animation
        direction == 'forward'
          ? items[slideIndex - 1].classList.add('forward')
          : items[slideIndex - 1].classList.add('backward');
        };

        // EVENTS

        firstCarousel.addEventListener('click', (e) =>
          handleRightArrow(e, firstCarouselItems)
        );
        firstCarousel.addEventListener('click', (e) =>
          handleLeftArrow(e, firstCarouselItems)
        );
        secondCarousel.addEventListener('click', (e) =>
          handleRightArrow(e, secondCarouselItems)
        );
        secondCarousel.addEventListener('click', (e) =>
          handleLeftArrow(e, secondCarouselItems)
        );
      }
  );
}
