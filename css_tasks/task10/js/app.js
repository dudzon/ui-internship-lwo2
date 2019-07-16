import {validateForm} from './form.js';

const signup = document.forms.signup;

signup.addEventListener('submit', validateForm);
