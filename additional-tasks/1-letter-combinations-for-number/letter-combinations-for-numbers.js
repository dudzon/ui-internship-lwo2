export const letterCombinations = ( str ) => {
  if ( !str.length ) return [];
  return str.split('')
      .map( (item) => mappedDigits[item])
      .reduce( ( prev, next ) => {
        const result = [];
        for ( let i = 0; i < prev.length; i++ ) {
          for ( let j = 0; j < next.length; j++ ) {
            result.push( prev[i] + next[j] );
          }
        }
        return result;
      });
};

const mappedDigits = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
