export const bouncingBall = ( h, bounce, window ) => {
  if ( h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ) return -1;
  let result = 1;
  while (( h *= bounce ) > window ) {
    result += 2;
  }
  return result;
};

