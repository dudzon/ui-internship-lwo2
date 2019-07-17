import {
  submitForm,
  removeDisabledState,
  addDisabledState,
  hideFormText
} from "./form.js";
import { constants } from "./constants.js";
const { signupForm, formButton, inputs, formText } = constants;

// EVENTS
signupForm.addEventListener("submit", submitForm);
inputs.forEach(item =>
  item.addEventListener("focus", () =>
    removeDisabledState(formButton, formText)
  )
);
signupForm.addEventListener("submit", () => addDisabledState(formButton));
formButton.addEventListener("click", () => hideFormText(formText));
