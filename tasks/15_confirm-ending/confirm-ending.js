// Solution 1 - with slice method
// export const confirmEnding = (str, target) =>{
//   return str.slice(-target.length)===target;
// };

// Solution 2 - with substring method

export const confirmEnding = (str, target) =>{
  return str.substring(str.length - target.length) ===target;
};
