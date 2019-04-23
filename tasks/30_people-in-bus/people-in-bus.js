//  I'm repeating myself, probably it could be refactored
//  but I don'know how :)

export const peopleInBus = ( arr ) => {
  const peopleIn = arr.map( ( item ) => item[0] )
      .reduce( ( prev, next ) => prev + next, 0 );
  const peopleOut = arr.map( ( item ) => item[1] )
      .reduce( ( prev, next ) => prev + next, 0 );

  return peopleIn - peopleOut;
};


