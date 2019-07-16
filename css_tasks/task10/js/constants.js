/* eslint-disable max-len */
export const constants = {
  nameText: 'Only latin letters',
  namePattern: /^[a-zA-Z ]+$/,
  emailText: 'Provide valid email address',
  emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordText:
    'Password should have at least  6 characters including:capital letter, lowercased letter, digit and special character',
  passwordPattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
  formButton: document.querySelector('.form__button'),
  formInputContainer: document.querySelectorAll('.form-input__container'),
  signupForm: document.forms.signup,
  inputs: [
    ...document.querySelectorAll('input.inner-container__element--form'),
  ],
};
