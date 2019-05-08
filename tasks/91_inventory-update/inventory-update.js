/* eslint-disable max-len */
export const updateInventory = ( arr1, arr2 ) => {
  let updateItems = arr1.concat(arr2).reduce(( prev, next ) => {
    if ( prev[next[1]] ) {
      prev[next[1]] += next[0];
    } else {
      prev[next[1]] = next[0];
    }
    return prev;
  }, {});

  return Object.keys(updateItems).map( (val) => [updateItems[val], val]).sort( (a, b) => a[1] === b[1] ? 0 : (a[1] < b[1] ? -1 : 1));
};
