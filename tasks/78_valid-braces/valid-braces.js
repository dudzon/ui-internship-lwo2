/* eslint-disable max-len */
//  First I wanted to use three different counters and loop with switch statement inside,
//  to match number of opening and closing braces. And it worked, I passed all the tests but for one
//  where braces order is not correct : validBraces("[(])")
//  So I googled a bit and figured out this solution.

export const validBraces = ( str ) => {
  let pattern = /\[\]|\(\)|\{\}/;
  while ( pattern.test( str ) ) {
    str = str.replace( pattern, '');
  }
  return str === '' ? true : false;
};
