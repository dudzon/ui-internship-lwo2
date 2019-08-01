import {elements} from './elements.js';
export function tabsInit() {
  elements.then((data) => {
    const {tabs, texts} = data;

    const handleTabs = (elem, items) => {
      resetActiveState(tabs, texts);
      // items mean array of texts imported in app.js
      setActiveState(elem, items);
    };

    // Reset all data-active attributes

    const resetActiveState = (tabElem, textElem) => {
      tabElem.forEach((item) => item.removeAttribute('data-active'));
      textElem.forEach((item) => item.removeAttribute('data-active-text'));
    };

    //  Set active attribute to tab via event.handler
    // and to text element via items

    const setActiveState = (tabElem, textElem) => {
      tabElem.setAttribute('data-active', 'active');
      const selectedTab = textElem.filter(
          (text) => text.dataset.tab === tabElem.dataset.tab
      );
      // set active attribute to a text
      selectedTab[0].setAttribute('data-active-text', 'active');
    };
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => handleTabs(e.target, texts));
    });
  });
}
