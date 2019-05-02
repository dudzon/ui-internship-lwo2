/* eslint-disable max-len */

// I used Euclidean Algorithm and Stack Overflow to find out how to use it in this case :)

export const smallestCommons = ( arr ) => {
  let numbersInBetween = [];

  for ( let i = Math.max( arr[0], arr[1] ); i >= Math.min( arr[0], arr[1] ); i-- ) {
    numbersInBetween.push(i);
  }

  let leastCommonMultiple = numbersInBetween[0];

  for ( let i = 0; i < numbersInBetween.length; i++ ) {
    let greatestCommonDivisible = euclideanAlgorithm( leastCommonMultiple, numbersInBetween[i] );
    leastCommonMultiple = ( leastCommonMultiple * numbersInBetween[i] ) / greatestCommonDivisible;
  }
  return leastCommonMultiple;
};


const euclideanAlgorithm = (x, y) => y === 0 ? x : euclideanAlgorithm( y, x % y);
