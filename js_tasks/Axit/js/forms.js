/* eslint-disable max-len */
/* eslint-disable no-undef */

import {jumbotronForm, footerForm} from './app.js';


const validateJumbotronForm = (e) => {
  validateName(jumbotronForm, e);
  validateEmail(jumbotronForm, e);
  validatePassword(jumbotronForm, e);
};
const validateFooterForm = (e) => {
  validateName(footerForm, e);
  validateEmail(footerForm, e);
  validateMessage(footerForm, e);
};

//  Validate Name Input

const validateName = (formName, e) => {
  const name = formName.elements.name;
  const nameText = 'Only latin letters';
  const nameValue = name.value;
  const namePattern = /^[a-zA-Z]+$/g;
  hideWarning(name);
  if (!namePattern.test(nameValue)) {
    showWarning(name, nameText);
    e.preventDefault();
  }
};

//  Validate Email Input

const validateEmail = (formName, e) => {
  const email = formName.elements.email;
  const emailText = 'Provide valid email address';
  const emailValue = email.value;
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  hideWarning(email);
  if (!emailPattern.test(emailValue)) {
    showWarning(email, emailText);
    e.preventDefault();
  }
};

// Validate Password Input

const validatePassword = (formName, e) => {
  const password = formName.elements.password;
  const passwordText =
    'Password should have at least  6 characters including:capital letter, lowercased letter, digit and special character';
  const passwordValue = password.value;
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  hideWarning(password);
  if (!passwordPattern.test(passwordValue)) {
    showWarning(password, passwordText);
    e.preventDefault();
  }
};
// Validate Message Textarea

const validateMessage = (formName, e) => {
  const message = formName.elements.message;
  const messageText = 'Your message must have between 1 and 250 characters';
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

export {validateJumbotronForm, validateFooterForm};
