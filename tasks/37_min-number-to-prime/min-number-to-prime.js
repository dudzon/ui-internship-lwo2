/* eslint-disable for-direction */

//  It's working but it needs to be refactored in some way.
//  First we create a helper function isPrime to check if number is prime number
//  Then we sum the array numbers and run helper function.
//  If the sum is prime number we return 0, if not
//  we just play with fire and run and infinite loop :)
//  We run helper function and find out the missing number.
//  There is a Sieve of Erasthotenes algorithm, probably could be applied here,
//  but at this time I couldn't figure out anything smarter.

const isPrime = ( num ) => {
  for ( let i = 2; i < Math.sqrt(num); i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
};


export const minNumberToPrime = ( arr ) => {
  const sum = arr.reduce(( prev, next ) => prev + next, 0);
  if ( isPrime(sum) ) return 0;
  for ( let i = 1; i > 0; i++ ) {
    if ( isPrime( sum + i ) === false ) continue;
    if ( isPrime( sum + i ) === true ) return i;
  }
};
