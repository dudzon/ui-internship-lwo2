export const stringExpansion = ( str ) => {
  let multiplier;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const isALetter = isNaN( parseInt(str[i]) );
    if ( isALetter ) {
      if ( multiplier ) {
        result += str[i].repeat( multiplier );
      } else {
        result += str[i];
      }
    } else {
      multiplier = str[i];
    }
  }
  return result;
};
