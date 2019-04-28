export const translatePigLatin = ( str ) => {
  const isAVowel = str[0].match( /[aeiou]/g );
  let consonantCluster = [];
  if ( isAVowel ) return `${str}way`;
  for ( let i = 0; i < str.length; i++) {
    const vowel = str[i].match( /[aeiou]/g );
    if ( !vowel ) {
      consonantCluster.push( str[i] );
    } else {
      break;
    }
  }
  // eslint-disable-next-line max-len
  return `${str.slice( consonantCluster.length )}${consonantCluster.join('')}ay`;
};
