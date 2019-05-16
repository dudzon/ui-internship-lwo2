/* eslint-disable max-len */

export const sortByBits = (arr) => {
  const copy = arr.slice();
  return copy.sort( (a, b) => {
    let bitDifference = a.toString(2).replace(/0/g, '').length - b.toString(2).replace(/0/g, '').length;
    if ( bitDifference === 0 ) {
      bitDifference = a - b;
    }
    return bitDifference;
  }
  );
};
