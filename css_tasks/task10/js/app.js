import {submitForm} from './form.js';
import {DOMElements} from './elements.js';
const {signupForm} = DOMElements;

// EVENTS
document.addEventListener('DOMContentLoaded', () => {
  signupForm.addEventListener('submit', submitForm);
});
