export const findLetter = (str) => {
  for ( let i = 0; i < str.length - 1; i++ ) {
    if ( str[i + 1].charCodeAt() - str[i].charCodeAt() === 2 ) {
      return String.fromCharCode( str[i + 1].charCodeAt() - 1 );
    }
  }
  return undefined;
};
