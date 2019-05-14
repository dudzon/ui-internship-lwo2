// Solution 1

// export const abbreviated = ( str ) => {
//   const absplit = str.split(' ');
//   let result = [absplit[0]];
//   for ( let i = 1; i < absplit.length; i++ ) {
//     let abbr = absplit[i].slice( 0, 1 ) + '.';
//     result.push(abbr);
//   }
//   return result.join(' ');
// };

// Solution 2
export const abbreviated = ( str ) => {
  return str.split(' ').map(( item, index ) => {
    if ( index > 0) {
      item = item.slice( 0, 1 ) + '.';
    }
    return item;
  }).join(' ');
};

