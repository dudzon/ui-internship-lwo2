export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      formButton: document.querySelector('.form__button'),
      formInputContainer: [
        ...document.querySelectorAll('.form-input__container'),
      ],
      signupForm: document.forms.signup,
      inputs: [
        ...document.querySelectorAll('input.inner-container__element--form'),
      ],
      formText: document.querySelector('.form__text'),
    };
    res(DOMElements);
  });
});
