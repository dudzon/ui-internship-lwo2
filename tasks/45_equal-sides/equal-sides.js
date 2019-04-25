/* eslint-disable max-len */
export const findEqualIndex = ( arr ) => {
  for ( let i = 1; i < arr.length; i++) {
    let sumOfFirstChunk = arr.slice(0, i+1).reduce(( prev, next ) => prev + next, 0);
    let sumOfSecondChunk = arr.slice(i).reduce(( prev, next ) => prev + next, 0);
    if (sumOfFirstChunk === sumOfSecondChunk) return i;
  }
  return -1;
};
