export const elements = new Promise((res) => {
  document.addEventListener('DOMContentLoaded', () => {
    const DOMElements = {
      loginForm: document.forms.loginForm,
      contactForm: document.forms.contactForm,
    };
    res(DOMElements);
  });
});
