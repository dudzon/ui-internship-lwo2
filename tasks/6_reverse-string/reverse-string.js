// 1st solution: use default String methods.
// export const reverseString = (str) => str.split('').reverse().join('');


// 2nd solution: start with a new empty string
// add and concatenate letters one by one

// export const reverseString = (str) =>{
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };

// 3rd solution: Make an array, use reduce method, add characters
// in reversed order to the empty string as a starting point

export const reverseString = (str) => str.split('')
    .reduce((prevChar, nextChar)=>nextChar +prevChar, '' );

