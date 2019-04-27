export const myReplace = ( str, before, after ) => {
  let firstLetter = before.slice( 0, 1 );
  if ( firstLetter === firstLetter.toUpperCase() ) {
    after = after.slice( 0, 1 ).toUpperCase() + after.slice(1);
  }
  return str.replace( before, after );
};
