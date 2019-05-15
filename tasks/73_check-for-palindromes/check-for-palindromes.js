export const palindrome = (str) => {
  const nonAlphanumeric = str.replace(/[_\W]/g, '').toLowerCase();
  const result = nonAlphanumeric.split('').reverse().join('').toLowerCase();
  return nonAlphanumeric === result;
};
