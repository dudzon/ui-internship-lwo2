/* eslint-disable prefer-rest-params */

// Arrow functions don't have an access to arguments object
// so classic function must be used.
// First, create an empty array and copy arguments with call method,
// then filter out arguments.

export function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments);
  arr = arr.filter((item) => args.indexOf(item)==-1 ? true :false );
  return arr;
}
