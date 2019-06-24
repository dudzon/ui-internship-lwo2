// export const bouncingBall = ( h, bounce, window ) => {
//   if ( h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ) return -1;
//   let result = 1;
//   while (( h *= bounce ) > window ) {
//     result += 2;
//   }
//   return result;
// };

// Solution 2

export const bouncingBall = ( height, bounce, window ) => {
  return Math.floor(Math.log( window/height)/Math.log(bounce) ) * 2 + 1;
};
