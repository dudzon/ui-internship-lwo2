// Generally we could use iteration or recursion here
// 1st solution : iteriation

// export const factorialize = (n)=>{
//   let sum = 1;
//   for ( let i = 1; i<=n; i++) {
//     sum *=i;
//   }
//   return sum;
// };

// 2nd solution: recursion with ternary operator
// to get a beautiful one-liner
// if n <=1 the result is one, otherwise we repeat factorialize function
// until n equals 1
export const factorialize = (n) => n <= 1 ? 1 : factorialize(n-1) * n;
