//  Not very performance friendly approach.It's O^2 solution.

export const pairwise = ( arr, num ) => {
  let sum = 0;
  let copy = arr.slice();
  for ( let i = 0; i < copy.length; i++ ) {
    for ( let j = i + 1; j < copy.length; j++ ) {
      if ( copy[i] + copy[j] === num ) {
        sum += i + j;
        copy[i] = copy[j] = NaN;
      }
    }
  }
  return sum;
};
