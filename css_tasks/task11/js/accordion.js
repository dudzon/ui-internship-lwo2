// HOW I CAN EXPORT THIS TO APP.JS????
// I want to keep logic for this task in accordion.js
// and app.js in only for events.
// I don't know how I can export handleAccordion from
// inside resolver.
//
//
// =====================================================
//
//
// import {resolver} from './elements.js';
// resolver.then((data) => {
//   const {image} = data;
//   const handleAccordion = (item) => {
//     // do nothing if you didn't click on accordion

//     if (item.tagName !== 'SUMMARY') return;
//     const parentContainer = item.parentElement.parentElement;
//     const accordionItems = [...parentContainer.children];
//     closeAccordionTabs(accordionItems);
//     openAccordionTab(item);
//     const imageToDisplay = searchImage(item);
//     displayActiveImage(imageToDisplay);
//   };

//   // Close all accordion tabs

//   const closeAccordionTabs = (element) => {
//     element.forEach((item) => item.removeAttribute('open'));
//     element.forEach((item) => item.removeAttribute('data-tab-active'));
//   };

//   //  Open tab which you clicked on

//   const openAccordionTab = (element) => {
//     const currentAccordionTab = element.parentElement;
//     currentAccordionTab.setAttribute('data-tab-active', 'active');
//   };

//   // Search for an image to display

//   const searchImage = (element) => {
//     const image = element.parentElement.dataset.image;
//     return image;
//   };

//   // Display image that is connected to open tab

//   const displayActiveImage = (element) => {
//     image.forEach((item) => item.removeAttribute('data-image-active'));
//     const activeImage = image.find((item) => item.dataset.image === element);
//     activeImage.setAttribute('data-image-active', 'active');
//   };
//   return handleAccordion;
// });

// export {handleAccordion};
