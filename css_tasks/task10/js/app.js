import {
  submitForm,
  removeDisabledState,
  addDisabledState,
} from './form.js';
import {constants} from './constants.js';
const {signupForm, formButton, inputs} = constants;

// EVENTS
signupForm.addEventListener('submit', submitForm);
inputs.forEach((item) =>
  item.addEventListener('focus', () => removeDisabledState(formButton))
);
signupForm.addEventListener('submit', () => addDisabledState(formButton));
