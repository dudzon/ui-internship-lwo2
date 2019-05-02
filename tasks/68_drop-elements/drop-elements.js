// It works but I expected different solution :)
// I just figure out solution to pass tests...

export const dropElements = ( arr, func ) => {
  for ( let i = 0; i< arr.length; i++) {
    if ( func(arr[i]) ) {
      const additional = arr.slice( i, arr[arr.length] );
      return additional;
    }
  }
  return [];
};


