import {DOMElements as elems} from './elements.js';

import {showPopup, removePopup} from './popup.js';

// HANDLERS

const {gallery, overlay} = elems;

// // EVENTS
gallery.addEventListener('click', (e) => showPopup(e.target));
overlay.addEventListener('click', (e) => removePopup());
