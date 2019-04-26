/* eslint-disable max-len */
// I wanted to return flattened array, and first I use
// Array.flat() method. My first solution was :
// return [...new Set(result.flat())].join(', ')
// It worked in JSBin but here I failed tests, as
// "result.flat() is not a function". Strange.
// So I flattened array using reduce method.

export const followTheSpy = ( arr ) => {
  let result = arr[0];
  let foundRoute;

  for ( let i = 1; i < arr.length; i++) {
    if ( i === 1) {
      foundRoute = arr.find(( item ) => item[0] === result[result.length - 1]);
      result.push(foundRoute);
    } else {
      foundRoute = arr.find(( item ) => item[0] === result[result.length - 1][1]);
      result.push(foundRoute);
    }
  }
  // eslint-disable-next-line no-undef
  return [...new Set(result.reduce(( prev, next ) => prev.concat(next), []))].join(', ');
};
