// First we have to find out which array is bigger - this is mainArr.
// Such distinction doesn't matter if arrays are equally sized.
// Then we map through mainArr and check if there is element
// at the same index in secondArr. If there is, we add value from secondArr
// to elem in mainArr, if not, we just do nothing and return elem from mainArr.
// This means that value of not existent elem in secondArr is 0.


export const arrayPlusArray = ( arr1, arr2 ) =>{
  const mainArr = arr1.length >= arr2.length ? arr1 : arr2;
  const secondArr = arr1.length < arr2.length ? arr1 : arr2;

  // eslint-disable-next-line max-len
  return mainArr.map( (elem, idx) => secondArr[idx] ? elem + secondArr[idx] : elem );
};


