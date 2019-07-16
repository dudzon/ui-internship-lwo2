/* eslint-disable max-len */
import {constants} from './constants.js';

const {
  nameText,
  namePattern,
  emailText,
  emailPattern,
  passwordPattern,
  passwordText,
  formInputContainer,
} = constants;

const submitForm = (e) => {
  validateName(e.target, e);
  validateEmail(e.target, e);
  validatePassword(e.target, e);
};

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

// Show warning

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

// Add disabled class to the button

const addDisabledState = (elem) => {
  const inputContainers = [...formInputContainer];
  inputContainers.forEach((item) => {
    const lastChild = item.lastElementChild.classList.contains('form-error');
    if (lastChild) {
      elem.classList.add('disabled');
    }
  });
};

//  Remove disabled class from the button
const removeDisabledState = (elem) => {
  const hasClass = elem.classList.contains('disabled');
  if (hasClass) {
    elem.classList.remove('disabled');
  }
};
export {
  submitForm,
  addDisabledState,
  removeDisabledState,
};
