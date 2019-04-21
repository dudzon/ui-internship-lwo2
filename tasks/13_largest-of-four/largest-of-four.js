// Solution 1st - Old school with loop

// export const largestOfFour = (arr) =>{
//   const result = [];
//   for ( let i = 0; i<arr.length; i++) {
//     arr[i].sort((a, b) => b-a);
//     result.push(arr[i][0]);
//   }
//   return result;
// };

// Solution 2nd - ES6 Hacker Style with spread operator

export const largestOfFour = (arr) => arr.map((item) => Math.max(...item));
