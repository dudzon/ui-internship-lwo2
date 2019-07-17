import {DOMElements as elems} from './elements.js';
import {handleTabs} from './tabs.js';
const {tabs, texts} = elems;

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => handleTabs(e.target, texts));
});
