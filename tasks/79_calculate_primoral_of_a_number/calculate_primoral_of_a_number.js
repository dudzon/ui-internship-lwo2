/* eslint-disable for-direction */
//  I modified slightly my code used in previous exercises.

export const numPrimorial = ( num ) => {
  let primesArray = [];
  for ( let i = 2; i > 0; i ++) {
    if ( primesArray.length + 1 <= num ) {
      if ( getPrime( i)) {
        primesArray.push(i);
      }
    } else {
      break;
    }
  }
  return primesArray.reduce(( prev, next ) => prev * next, 1);
};

const getPrime = ( num ) => {
  for ( let i = 2; i <= Math.sqrt(num); i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
};


