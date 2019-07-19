import {submitForm} from './form.js';
import {DOMElements} from './elements.js';
const {signupForm} = DOMElements;

// EVENTS
signupForm.addEventListener('submit', submitForm);
