//  It works but I need a lesson about regular expressions.
//  It should be refactored in more professional way
//  with proper regex pattern.

// Solution 1
// export const findFriend = ( arr ) => {
//   const stringified = arr.join(' ');
//   const pattern = ['blue blue red', 'red blue blue'];
//   let friends = 0;
//   pattern.forEach((item) => {
//     if ( stringified.match(item) ) {
//       friends +=1;
//     }
//   });
//   return friends;
// };

// Solution 2
export const findFriend = ( arr ) => {
  let friend = 0;
  for ( let i = 0; i < arr.length; i++) {
    if ( arr[i] !== 'red' ) continue;
    if (( arr[i - 2] === 'blue' && arr[i - 1] === 'blue') ||
        ( arr[i + 1] === 'blue' && arr[i + 2] === 'blue')) {
      friend ++;
    }
  }
  return friend;
};
