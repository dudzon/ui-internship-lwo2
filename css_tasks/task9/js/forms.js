/* eslint-disable max-len */
/* eslint-disable no-undef */

import {constants} from './constants.js';

const {nameText,
  namePattern,
  emailText,
  emailPattern,
  passwordText,
  passwordPattern,
  messageText} = constants;

const submitLoginForm = (e) => {
  validateName(e.target, e);
  validateEmail(e.target, e);
  validatePassword(e.target, e);
};
const submitContactForm = (e) => {
  validateName(e.target, e);
  validateEmail(e.target, e);
  validateMessage(e.target, e);
};

//  Validate Name Input

const validateName = (formName, e) => {
  const name = formName.elements.name;
  const nameValue = name.value;
  hideWarning(name);
  if (!namePattern.test(nameValue)) {
    showWarning(name, nameText);
    e.preventDefault();
  }
};

//  Validate Email Input

const validateEmail = (formName, e) => {
  const email = formName.elements.email;
  const emailValue = email.value;
  hideWarning(email);
  if (!emailPattern.test(emailValue)) {
    showWarning(email, emailText);
    e.preventDefault();
  }
};

// Validate Password Input

const validatePassword = (formName, e) => {
  const password = formName.elements.password;
  const passwordValue = password.value;
  hideWarning(password);
  if (!passwordPattern.test(passwordValue)) {
    showWarning(password, passwordText);
    e.preventDefault();
  }
};
// Validate Message Textarea

const validateMessage = (formName, e) => {
  const message = formName.elements.message;
  const messageValue = message.value;
  hideWarning(message);
  if (messageValue.length < 1 || messageValue.length > 250) {
    showWarning(message, messageText);
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

export {submitLoginForm, submitContactForm};
