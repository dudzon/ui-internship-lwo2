export const maxProduct = ( arr ) => {
  let maxElemsProduct = arr[0] * arr[1];
  for ( let i = 0; i < arr.length; i++ ) {
    let adjacentElemProduct = arr[i] * arr[i+1];
    if ( adjacentElemProduct > maxElemsProduct ) {
      maxElemsProduct = adjacentElemProduct;
    }
  }
  return maxElemsProduct;
};
