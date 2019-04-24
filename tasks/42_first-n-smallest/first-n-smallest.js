// make a copy of original array,sort it and slice the chunk with lowest numbers
// then return only numbers from original array that are part of copied array.
// In case there are duplicates, return only correct number of elements

export const firstNSmallest = ( arr, num ) => {
  const copy = arr.slice().sort( (a, b) => a-b ).slice( 0, num );
  return arr.filter(( item ) => copy.includes(item) ).slice( 0, num );
};
