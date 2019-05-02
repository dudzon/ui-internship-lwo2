// In real life I would never use loop here, in first
// test case you have two elements in array that match condition
// [8,10], but you only return first element. You could of course make
// an empty array and push elems to this new array and return it , but
// is troublesome. I'd use simple filter function instead:
// return arr.filter( item => func(item)).

export const findElement = ( arr, func ) => {
  for ( let element of arr) {
    if ( func(element)) return element;
  }
};
