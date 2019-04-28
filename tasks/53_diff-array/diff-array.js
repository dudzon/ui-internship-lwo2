// It's not a smart solution :(
// export const diffArray = ( arr1, arr2 ) => {
//   let result = [];

//   arr1.filter(( item ) => {
//     if (arr2.indexOf( item ) === -1) {
//       result.push( item );
//     }
//   });
//   arr2.filter(( item ) => {
//     if (arr1.indexOf( item ) === -1) {
//       result.push( item );
//     }
//   });
//   return result;
// };

// Solution 2 -  much better

export const diffArray = ( arr1, arr2 ) => [...arr1, ...arr2]
    // eslint-disable-next-line max-len
    .filter(( elem, index, arr ) => arr.indexOf(elem) === arr.lastIndexOf(elem) );

