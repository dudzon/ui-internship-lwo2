export const uniqueInOrder = ( str )=> {
  return [...str].filter( (item, index) => str[index -1] !== item );
};
