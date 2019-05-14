/* eslint-disable max-len */
const symDiff = (a, b) => {
  const result = [];

  a = [...new Set( a.sort() )];

  b = [...new Set( b.sort() )];
  a.map(( element ) => {
    let doesExist = b.indexOf(element);
    if ( doesExist === -1 ) {
      result.push( element );
    } else {
      b.splice( doesExist, 1 );
    }
  });
  return result.concat(b);
};
export const sym = (...args) => {
  let symmetricDifference = args.reduce( (acc, el) => symDiff( acc, el ) );
  return [...new Set( symmetricDifference.sort() )];
};
