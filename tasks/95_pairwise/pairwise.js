//  Not very performance friendly approach.It's O^2 solution.

export const pairwise = ( arr, num ) => {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[i] + arr[j] === num ) {
        sum += i + j;
        arr[i] = arr[j] = NaN;
      }
    }
  }
  return sum;
};
