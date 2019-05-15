export const sumPrimeIndexedElements = ( arr ) => {
  let primeIndexedElements = [];

  for ( let i = 2; i < arr.length; i ++ ) {
    if ( isPrime(i) ) {
      primeIndexedElements.push( arr[i] );
    }
  }
  return primeIndexedElements.reduce(( prev, next ) => prev + next, 0 );
};
const isPrime = ( num ) => {
  for ( let i = 2; i <= Math.sqrt(num); i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
};
