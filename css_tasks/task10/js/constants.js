/* eslint-disable max-len */
export const constants = {
  nameText: 'Only latin letters',
  namePattern: /^[a-zA-Z ]+$/,
  emailText: 'Provide valid email address',
  emailPattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordText:
    'Password should have at least  6 characters including:capital letter, lowercased letter, digit and special character',
  successText: 'You have been signed up',
  passwordPattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
};
