import {DOMElements as elems} from './elements.js';

const {tabs, texts} = elems;

const handleTabs = (elem, items) => {
  resetActiveState(tabs, texts);
  setActiveState(elem, items); // items mean array of texts imported in app.js
};

// Reset all data-active attributes

const resetActiveState = (tabElem, textElem) => {
  tabElem.forEach((item) => item.removeAttribute('data-active'));
  textElem.forEach((item) => item.removeAttribute('data-active-text'));
};

//  Set active attribute to tab via event.handler and to text element via items

const setActiveState = (tabElem, textElem) => {
  tabElem.setAttribute('data-active', 'active');
  const findOne = textElem.filter(
      (text) => text.dataset.tab === tabElem.dataset.tab
  );
  // set active attribute to a text
  findOne[0].setAttribute('data-active-text', 'active');
};
export {handleTabs};
