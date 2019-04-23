// Make an empty array, we know that the charCode range for
// uppercased letters is between 65 and 90.
// We swap the charCodes by adding or substracting 13 from original charCode.

export const rot13Encoder =(string) =>{
  let result = [];

  for ( let i = 0; i<= string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=77) {
      result.push(String.fromCharCode(string.charCodeAt(i)+13));
    } else if (string.charCodeAt(i)>=78 && string.charCodeAt(i) <=90) {
      result.push(String.fromCharCode(string.charCodeAt(i)-13));
    } else {
      result.push(string[i]);
    }
  }
  return result.join('');
};
