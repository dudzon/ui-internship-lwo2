/* eslint-disable no-undef */

// IMPORTS
import {submitLoginForm, submitContactForm} from './forms.js';

// HANDLERS
const loginForm = document.forms.loginForm;
const contactForm = document.forms.contactForm;

// EVENTS
loginForm.addEventListener('submit', submitLoginForm);
contactForm.addEventListener('submit', submitContactForm);
