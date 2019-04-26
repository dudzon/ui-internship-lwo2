//  WARNING: There's an error in test file!
// Input should be lowercased but one of test
// strings is not:"A kak ushakov lil v kashu kakao?"


// 1st solution

// export const getVowelCount = ( str ) => {
//   let sum = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   for ( let char of str.toLowerCase() ) {
//     if ( vowels.includes(char) ) {
//       sum++;
//     }
//   }
//   return sum;
// };

// 2nd solution

export const getVowelCount = ( str ) => {
  const vowels = str.match( /[aeiou]/gi );
  return vowels ? vowels.length : 0;
};
