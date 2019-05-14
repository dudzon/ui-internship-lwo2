/* eslint-disable max-len */
// export const translatePigLatin = ( str ) => {
//   const isAVowel = str[0].match( /[aeiou]/g );
//   let consonantCluster = [];
//   if ( isAVowel ) return `${str}way`;
//   for ( let i = 0; i < str.length; i++) {
//     const vowel = str[i].match( /[aeiou]/g );
//     if ( !vowel ) {
//       consonantCluster.push( str[i] );
//     } else {
//       break;
//     }
//   }
//   return `${str.slice( consonantCluster.length )}${consonantCluster.join('')}ay`;
// };


// Second solution:

export const translatePigLatin = ( str ) => {
  const pattern = /[aeiou]/;
  const isAVowel = pattern.test( str[0] );
  const consonantCluster = [];
  if ( isAVowel ) return `${str}way`;
  for ( let i = 0; i < str.length; i++) {
    const vowel = pattern.test( str[i] );
    if ( !vowel ) {
      consonantCluster.push( str[i] );
    } else {
      break;
    }
  }
  return `${str.slice( consonantCluster.length )}${consonantCluster.join('')}ay`;
};
