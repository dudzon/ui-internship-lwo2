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
      e.preventDefault();
      validate(e.target, 'name', namePattern, nameText);
      validate(e.target, 'email', emailPattern, emailText);
      validate(e.target, 'password', passwordPattern, passwordText);
      checkErrors(e.target);
    };
    const submitContactForm = (e) => {
      e.preventDefault();
      validate(e.target, 'name', namePattern, nameText);
      validate(e.target, 'email', emailPattern, emailText);
      validate(e.target, 'message', null, messageText);
      checkErrors(e.target);
    };

    // Validate input

    const validate = (element, string, pattern, inputText) => {
      const input = element.elements[string];
      const inputValue = input.value;
      hideWarning(input, element);
      if (
        inputValue.length < 1 ||
        inputValue.length > 250 ||
        (pattern && !pattern.test(inputValue))
      ) {
        showWarning(input, inputText, element);
      }
    };
    // Show warning message when form fails validation

    const showWarning = (formName, text, form) => {
      const warningMessage = document
          .createRange()
          .createContextualFragment(`<p class="form-error">${text}</p>`);
      form.setAttribute('data-error', 'error');
      formName.after(warningMessage);
    };

    // Hide warning message if the input passes validation

    const hideWarning = (elem, form) => {
      const warning = elem.nextElementSibling;
      if (warning && warning.classList.contains('form-error')) {
        warning.remove();
        form.removeAttribute('data-error');
      }
    };
    const checkErrors = (element) => {
      if (!element.hasAttribute('data-error')) window.location.reload();
    };

    loginForm.addEventListener('submit', submitLoginForm);
    contactForm.addEventListener('submit', submitContactForm);
  });
}
