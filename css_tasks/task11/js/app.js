// import {DOMElements as elems} from './elements.js';

import {resolver} from './elements.js';
resolver.then((data) => {
  const {gallery, popup, body, overlay} = data;
  gallery.addEventListener('click', (e) => showPopup(e.target));
  overlay.addEventListener('click', (e) => removePopup());
  const showPopup = (node) => {
    // if popup is displayed, do nothing

    if (popup.firstElementChild) {
      return;
    }
    createActiveImage(node);

    //  additional styling to properly display popup
    popup.style.display = 'flex';
    body.classList.add('popup-body');
    overlay.style.display = 'block';
  };

  //  pick active image
  const setActiveImage = (node) => {
    const image = node.closest('.gallery__element').firstElementChild
        .lastElementChild;
    return image;
  };

  // create active image and populate popup
  // I played with data attributes but in this
  // case, it is not really needed right now

  const createActiveImage = (node) => {
    const active = setActiveImage(node);
    const currentSrc = active.src;
    const image = document.createElement('IMG');
    image.src = currentSrc;
    image.setAttribute('data-image-active', 'active');
    popup.appendChild(image);
  };

  //  remove popup - remove image in popup from DOM
  //  styling to hide overlay

  const removePopup = () => {
    popup.style.display = 'none';
    popup.firstElementChild.remove();
    body.classList.remove('popup-body');
    overlay.style.display = 'none';
  };
});

// import {showPopup, removePopup} from './popup.js';

// // HANDLERS

// const {gallery, overlay} = elems;

// // // EVENTS
// gallery.addEventListener('click', (e) => showPopup(e.target));
// overlay.addEventListener('click', (e) => removePopup());
