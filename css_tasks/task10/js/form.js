
/* eslint-disable max-len */
import {constants} from './constants.js';

const {nameText, emailText, emailPattern, passwordPattern, passwordText} = constants;

const namePattern = /^[a - zA - Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const validateForm = (e) => {
  validateName(e.target, e);
  validateEmail(e.target, e);
  validatePassword(e.target, e);
};

const validateName = (formName, e) => {
  const name = formName.elements.name;
  const nameValue = name.value;
  hideWarning(name);
  console.log(namePattern.test(nameValue));
  console.log(nameValue)
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

export {validateForm};
