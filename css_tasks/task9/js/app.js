import {validate} from './jumbotronForm.js';
// eslint-disable-next-line no-undef
const jumbotronForm = document.forms.jumbotronForm;

const validation = (e)=> {
  e.preventDefault();
  validate(jumbotronForm);
};
jumbotronForm.addEventListener('submit', validation);
