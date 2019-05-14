export const reverseStringInRange = ( str, indices ) => {
  const reversed = str.slice( indices[0], indices[1] + 1 )
      .split('').reverse().join('');
  return str.slice( 0, indices[0] ) + reversed + str.slice( indices[1] + 1 );
};
