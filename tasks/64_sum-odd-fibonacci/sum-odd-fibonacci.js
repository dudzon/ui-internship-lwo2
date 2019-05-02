export const sumFibs = (n) => {
  const result = [1, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }

  return result.filter( (item) => item <= n )
      .filter((item) => item % 2 !== 0)
      .reduce(( prev, next ) => prev + next, 0 );
};


