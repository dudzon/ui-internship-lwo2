/* eslint-disable no-undef */
/* eslint-disable no-console */
const jumbotronForm = document.forms.jumbotronForm;

jumbotronForm.addEventListener('submit', (e) => {
  const jumbotronName = jumbotronForm.elements.name.value;
  e.preventDefault();
  console.log(jumbotronName);
});
