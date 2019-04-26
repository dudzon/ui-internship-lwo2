/* eslint-disable prefer-rest-params */

// Arrow functions don't have an access to arguments object
// so classic function must be used.
// First, create an empty array and copy arguments with call method,
// then filter out arguments.

export function destroyer( arr, ...rest ) {
  arr = arr.filter( (item) => !rest.includes(item));
  return arr;
}
