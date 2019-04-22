// Make an empty array, run indexOf() on first element of input array.
// Make sure that case is ignored adding toLowerCase() and fill output
// array with number of indices. Run array every method to find out
// if all elements in output array > -1,(exist in input string)

export const checkLetters = (arr) =>{
  const result = [];
  const lowercased = arr[0].toLowerCase();

  for (let item of arr[1].toLowerCase()) {
    result.push(lowercased.indexOf(item));
  }

  return result.every((element) => element > -1);
};


