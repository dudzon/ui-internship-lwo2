// It works but I'm not sure if my approach to this problem is correct
export function expressionMatter( a, b, c ) {
  // eslint-disable-next-line prefer-rest-params
  const sortedArgs = Object.values(arguments).sort((a, b) => a-b );
  [a, b, c] = sortedArgs;

  let result = [];
  const test1 = a + ( b * c );
  const test2 = a * b * c;
  const test3 = a + b * c;
  const test4 = ( a + b ) * c;
  const test5 = a + b + c;
  result.push( test1, test2, test3, test4, test5);
  return Math.max( ...result );
}


