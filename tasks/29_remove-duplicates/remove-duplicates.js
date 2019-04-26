/* eslint-disable no-undef */

// 1st solution : use filter and indexOf:

// eslint-disable-next-line max-len
// export const removeDuplicates = ( arr ) => arr.filter( (elem, index) => arr.indexOf(elem) === index );

// 2nd solution: Use Set, and that's all.
// We could use spread operator too: [...new Set(arr)]

export const removeDuplicates = (arr) => Array.from( new Set(arr) );

