/* eslint-disable max-len */
// I don't know if the way I calculated step in diffs array is correct,
// it works but we have here only two test cases.
// Variable step means the difference between elements in array.

export const findMissing = ( arr ) => {
  let diffs = [];
  for ( let i = 0; i < arr.length-1; i++) {
    diffs.push(arr[i + 1] - arr[i]);
  }

  const step = Math.min( ...diffs );

  for ( let i = 0; i <= arr.length; i++) {
    if ( arr[i] + step !== arr[i + 1]) {
      return arr[i] + step;
    }
  }
};
