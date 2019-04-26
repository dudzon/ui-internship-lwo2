// Use modulo operator, make two arrays for different teams
// Sum them up and return new array

// export const rowWeights = ( arr ) => {
//   const team1 =[];
//   const team2 =[];

//   for ( let i = 0; i< arr.length; i++ ) {
//     ( i % 2 === 0 ) ? ( team1.push( arr[i] )) : ( team2.push( arr[i] ));
//   }
//   const result = [team1.reduce( (prev, next) => prev + next, 0),
//     team2.reduce( (prev, next) => prev + next, 0)];
//   return result;
// };

// Solution 2

export const rowWeights = ( arr ) => {
  let sumOdd = 0;
  let sumEven = 0;

  for ( let i = 0; i< arr.length; i++ ) {
    ( i % 2 === 0 ) ? ( sumEven += arr[i]) : ( sumOdd += arr[i] );
  }
  return [sumEven, sumOdd];
};
