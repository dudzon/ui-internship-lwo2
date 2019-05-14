export const sumAll = ( arr ) => {
  const minimum = Math.min( ...arr );
  const maximum = Math.max( ...arr );
  let sum = 0;
  for ( let i = minimum; i <= maximum; i++) {
    sum += i;
  }
  return sum;
};
