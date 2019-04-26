export const titleCase = (str)=> str.split(' ').map((item) => {
  let upperCased = item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
  return upperCased;
}).join(' ');
