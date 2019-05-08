export const leastCommonMultiple = ( a, b ) => {
  return ( !a || !b ) ? 0 : Math.abs(( a * b ) / greatestCommonDivisor( a, b ));
};

const greatestCommonDivisor = ( a, b ) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
};

