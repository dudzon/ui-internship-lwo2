/* eslint-disable no-undef */

// IMPORTS
import {validateJumbotronForm, validateFooterForm} from './forms.js';

// HANDLERS
export const jumbotronForm = document.forms.jumbotronForm;
export const footerForm = document.forms.footerForm;

// EVENTS
jumbotronForm.addEventListener('submit', validateJumbotronForm);
footerForm.addEventListener('submit', validateFooterForm);
