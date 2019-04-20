export const getNumbers =(str) => {
  const pattern = /\d+/g;
  return str.match(pattern).map((item) => (+item));
};
