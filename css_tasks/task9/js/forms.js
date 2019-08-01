/* eslint-disable max-len */

import {constants} from './constants.js';
import {elements} from './elements.js';

export function form() {
  elements.then((data) => {
    const {
      nameText,
      namePattern,
      emailText,
      emailPattern,
      passwordText,
      passwordPattern,
      messageText,
    } = constants;
    const {loginForm, contactForm} = data;
    const submitLoginForm = (e) => {
      validate(e.target, e, 'name', namePattern, nameText);
      validate(e.target, e, 'email', emailPattern, emailText);
      validate(e.target, e, 'password', passwordPattern, passwordText);
    };
    const submitContactForm = (e) => {
      validate(e.target, e, 'name', namePattern, nameText);
      validate(e.target, e, 'email', emailPattern, emailText);
      validate(e.target, e, 'message', null, messageText);
    };

    // Validate input

    const validate = (element, e, string, pattern, inputText) => {
      const input = element.elements[string];
      const inputValue = input.value;
      hideWarning(input);
      if (
        inputValue.length < 1 ||
        inputValue.length > 250 ||
        (pattern && !pattern.test(inputValue))
      ) {
        showWarning(input, inputText);
        e.preventDefault();
      }
    };
    // Show warning message when form fails validation

    const showWarning = (formName, text) => {
      const warningMessage = document
          .createRange()
          .createContextualFragment(`<p class="form-error">${text}</p>`);
      formName.after(warningMessage);
    };

    // Hide warning message if the input passes validation

    const hideWarning = (elem) => {
      const warning = elem.nextElementSibling;
      if (warning && warning.classList.contains('form-error')) {
        warning.remove();
      }
    };
    loginForm.addEventListener('submit', submitLoginForm);
    contactForm.addEventListener('submit', submitContactForm);
  });
}
