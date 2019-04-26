// Make an empty array, we know that the charCode range for
// uppercased letters is between 65 and 90.
// We swap the charCodes by adding or substracting 13 from original charCode.

export const rot13Encoder = ( string ) => {
  let result = [];
  for ( let i = 0; i <= string.length; i++ ) {
    let code = string.charCodeAt(i);
    if ( code >= 65 && code <= 77 ) {
      result.push( String.fromCharCode( code + 13 ) );
    } else if ( code >= 78 && code <= 90 ) {
      result.push( String.fromCharCode( code - 13 ) );
    } else {
      result.push( string[i] );
    }
  }
  return result.join('');
};
