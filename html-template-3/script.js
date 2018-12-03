/* global document:true, event:true */
/* eslint-disable no-invalid-this */
(function fixedScroll() {
  'use strict';
  const head = document.getElementById('head');

  document.addEventListener('scroll', addBackground);

  function addBackground() {
    if (document.documentElement.scrollTop > 0) {
      head.classList.add('add-background');
    } else {
      head.classList.remove('add-background');
    }
  }

  const navigation = document.querySelector('.top-navigation');
  const menuItem = document.getElementsByClassName('menu-item');

  navigation.addEventListener('click', (e) => addBorder(e.target.id));

  function addBorder(id) {
    const selectedLink = document.getElementById(`${id}`);
    for (let i = 1; i <= menuItem.length; i++) {
      const link = document.getElementById(`${i}`);
      if (selectedLink === link) {
        link.classList.add('add-border');
      } else {
        link.classList.remove('add-border');
      }
    }
  }
}());

(function accordion() {
  'use strict';
  const accItem = document.getElementsByClassName('drop-item');
  const accHD = document.getElementsByClassName('drop-item-header');
  const arrow = document.querySelectorAll('.arrow');
  for (let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem);
  }

  function toggleItem() {
    const itemClass = this.parentNode.className;
    const thisArrow = this.querySelector('i');
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'drop-item close';
      arrow[i].className = 'fas fa-angle-down';
    }
    if (itemClass === 'drop-item close') {
      this.parentNode.className = 'drop-item open';
      thisArrow.className = 'fas fa-angle-up';
    }
  }
}());

(function popUpClick() {
  'use strict';
  const popupContainer = document.getElementById('popup');
  const images = document.querySelector('.grid-gallery');
  const popupImg = document.getElementById('img');

  images.addEventListener('click', (e) => clicked(e.target));
  popupContainer.addEventListener('click', function(e) {
    // if(e.target.tagName !== 'IMG') {
    popupContainer.classList.remove('block');
    popupContainer.classList.add('none');
    // }
  });

  function clicked(target) {
    if (target === event.target) {
      popupContainer.classList.toggle('block');
      popupImg.src = target.src;
    }
  }
}());

(function slider() {
  'use strict';
  const next = document.querySelector('.fa-angle-right');
  const prev = document.querySelector('.fa-angle-left');
  const menu = document.querySelector('.quote-slider');
  let offset = 0;

  function move() {
    menu.style['transform'] = 'translate3d(' + offset + ', 0, 0)';
  }

  next.addEventListener('click', function() {
    if (parseInt(offset) <= -2300) {
      offset = 1150;
    }
    offset = (parseInt(offset) - 1150) + 'px';
    move();
    console.log(offset);
  }, false);

  prev.addEventListener('click', function() {
    if (parseInt(offset) >= 0) {
      offset = -3450;
    }
    offset = (parseInt(offset) + 1150) + 'px';
    move();
    console.log(offset);
  }, false);
}());

// (function() {
//   'use strict';
//   const slideBlock = document.querySelector('.quotes');
//   const slides = document.getElementsByClassName('quote-block');
//   const left = document.querySelector('.fa-angle-left');
//   const right = document.querySelector('.fa-angle-right');

//   slideBlock.addEventListener('click', (e) => {
//     if (e.target === left) {
//       plusSlides(1);
//     } else if (e.target === right) {
//       plusSlides(-1);
//     }
//   });

//   let slideIndex = 1;

//   showSlides(slideIndex);

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   function showSlides(n) {
//     if (n > slides.length) {
//       slideIndex = 1;
//     }

//     if (n < 1) {
//       slideIndex = slides.length;
//     }

//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.add('hidden');
//       slides[i].classList.remove('visible');
//     }

//     slides[slideIndex - 1].classList.add('visible');
//     slides[slideIndex - 1].classList.remove('hidden');
//   }
// }());

