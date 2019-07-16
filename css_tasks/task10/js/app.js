/* eslint-disable no-undef */
import {validateForm} from './form.js';

export const signup = document.forms.signup;

signup.addEventListener('submit', validateForm);
