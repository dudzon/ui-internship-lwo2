import {constants} from './constants.js';
import {elements} from './elements.js';

export function form() {
  elements.then((data) => {
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
    } = data;

    const submitForm = (e) => {
      e.preventDefault();
      validate(e.target, 'name', namePattern, nameText);
      validate(e.target, 'email', emailPattern, emailText);
      validate(e.target, 'password', passwordPattern, passwordText);
      showSuccessMessage();
    };
    const validate = (element, string, pattern, inputText) => {
      const input = element.elements[string];
      const inputValue = input.value;
      hideWarning(input);
      input.addEventListener('focus', () => removeDisabledState(formButton));
      if (pattern && !pattern.test(inputValue)) {
        handleError(input, inputText, formButton);
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
        const lastChild = item.lastElementChild.classList.contains(
            'form-error'
        );
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
    // EVENT
    signupForm.addEventListener('submit', submitForm);
  });
}

