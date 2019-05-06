export const addedChar = ( str1, str2 ) => {
  for ( let i = 0; i < str1.length; i++ ) {
    str2 = str2.replace( str1[i], '');
  }
  return [...new Set(str2)].join('');
};
