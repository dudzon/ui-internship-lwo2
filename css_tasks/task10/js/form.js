import {constants} from './constants.js';
import {DOMElements} from './elements.js';

const {
  nameText,
  namePattern,
  emailText,
  emailPattern,
  passwordPattern,
  passwordText,
  successText,
} = constants;
const {
  formInputContainer,
  inputs,
  signupForm,
  formButton,
  formText,
} = DOMElements;

const submitForm = (e) => {
  e.preventDefault();
  validateName(e.target);
  validateEmail(e.target);
  validatePassword(e.target);
  showSuccessMessage();
};

const validateName = (formName) => {
  const name = formName.elements.name;
  const nameValue = name.value;
  hideWarning(name);
  name.addEventListener('focus', () => removeDisabledState(formButton));
  if (!namePattern.test(nameValue)) {
    handleError(name, nameText, formButton);
  }
};

//  Validate Email Input

const validateEmail = (formName) => {
  const email = formName.elements.email;
  const emailValue = email.value;
  hideWarning(email);
  email.addEventListener('focus', () => removeDisabledState(formButton));
  if (!emailPattern.test(emailValue)) {
    handleError(email, emailText, formButton);
  }
};

// Validate Password Input

const validatePassword = (formName) => {
  const password = formName.elements.password;
  const passwordValue = password.value;
  password.addEventListener('focus', () => removeDisabledState(formButton));
  hideWarning(password);
  if (!passwordPattern.test(passwordValue)) {
    handleError(password, passwordText, formButton);
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

// Add disabled attribute to the button

const addDisabledState = (elem) => {
  formInputContainer.forEach((item) => {
    const lastChild = item.lastElementChild.classList.contains('form-error');
    if (lastChild) {
      elem.setAttribute('disabled', true);
    }
  });
};

// Remove disabled attribute from the button
const removeDisabledState = (elem) => {
  const disabled = elem.hasAttribute('disabled');
  if (disabled) {
    elem.removeAttribute('disabled');
  }
};

// Hide marketing slogan above the button ( it's absolutely positioned )
// because if there are any errors, it breaks the layout.
// It's not important when you are signing up.

const hideFormText = (elem) => {
  elem.style.display = 'none';
};

//  Create success message
const createSuccessMessage = () => {
  const successMessage = document
      .createRange()
      .createContextualFragment(
          `<p class="form-success-text">${successText}</p>`
      );
  return successMessage;
};

// show to the user notification that input has not been validated,
// add the disabled status to the button and hide that
// marketing text above the button.

const handleError = (input, inputText, handler) => {
  showWarning(input, inputText);
  addDisabledState(handler);
  hideFormText(formText);
};

//  Check if there are any errors displayed

const checkErrors = () => {
  const errorArray = [];
  formInputContainer.map((container) => {
    if (container.lastElementChild.tagName === 'P') {
      errorArray.push(container);
    }
  });
  return errorArray;
};

// If there are no errors, clear all inputs and show success message
// I mocked sending data with POST method by reloading the page after
// three seconds.

const showSuccessMessage = () => {
  const message = createSuccessMessage();
  const checkError = checkErrors();

  if (!checkError.length) {
    inputs.forEach((input) => (input.value = ''));
    signupForm.after(message);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};

export {submitForm, removeDisabledState};
