//  I'm repeating myself, probably it could be refactored
//  but I don'know how :)

// My solution
// export const peopleInBus = ( arr ) => {
//   const peopleIn = arr.map( ( item ) => item[0] )
//       .reduce( ( prev, next ) => prev + next, 0 );
//   const peopleOut = arr.map( ( item ) => item[1] )
//       .reduce( ( prev, next ) => prev + next, 0 );

//   return peopleIn - peopleOut;
// };

// Ivan hint:

export const peopleInBus = ( arr ) =>
  arr.reduce((acc, busStop) => {
    return acc + busStop[0] - busStop[1];
  }, 0);

