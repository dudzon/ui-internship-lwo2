export const maxTripletSum = ( arr ) => {
  // eslint-disable-next-line no-undef
  return [...new Set( arr )]
      .sort( (a, b) => b - a )
      .slice(0, 3)
      .reduce( (prev, next) => prev + next, 0);
};
