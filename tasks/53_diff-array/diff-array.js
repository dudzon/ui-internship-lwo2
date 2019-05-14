/* eslint-disable max-len */
// It's not a smart solution :(
export const diffArray = ( arr1, arr2 ) => {
  let result = [];

  arr1.forEach(( item ) => {
    if (!arr2.includes( item )) {
      result.push( item );
    }
  });
  arr2.forEach(( item ) => {
    if (!arr1.includes( item )) {
      result.push( item );
    }
  });
  return result;
};

// Solution 2 -  much better

// export const diffArray = ( arr1, arr2 ) => [...arr1, ...arr2]
//     // eslint-disable-next-line max-len
//     .filter(( elem, index, arr ) => arr.indexOf(elem) === arr.lastIndexOf(elem) );

