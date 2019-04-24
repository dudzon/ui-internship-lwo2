//  It works but I need a lesson about regular expressions.
//  It should be refactored in more professional way
//  with proper regex pattern.


export const findFriend = ( arr ) => {
  const stringified = arr.join(' ');
  const pattern = ['blue blue red', 'red blue blue'];
  let friends = 0;
  pattern.forEach((item) => {
    if ( stringified.match(item) ) {
      friends +=1;
    }
  });
  return friends;
};
