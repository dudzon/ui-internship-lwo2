/* eslint-disable no-undef */
/* eslint-disable no-console */

const validate = (formName) => {
  const jumbotronName = formName.elements.name.value;
  console.log(jumbotronName);
  return jumbotronName;
};
export {validate};
