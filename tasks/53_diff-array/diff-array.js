// It's not a smart solution :(
export const diffArray = ( arr1, arr2 ) => {
  let result = [];

  arr1.filter(( item ) => {
    if (arr2.indexOf( item ) === -1) {
      result.push( item );
    }
  });
  arr2.filter(( item ) => {
    if (arr1.indexOf( item ) === -1) {
      result.push( item );
    }
  });
  return result;
};
