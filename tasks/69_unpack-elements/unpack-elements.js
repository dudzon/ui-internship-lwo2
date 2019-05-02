// The easiest way would be to use flat method.
// return arr.flat(3)

export const unpackArray = ( arr ) => {
  return arr.reduce( (flattened, toFlatten) => {
    // eslint-disable-next-line max-len
    return flattened.concat( Array.isArray(toFlatten) ? unpackArray( toFlatten ) : toFlatten );
  }, [] );
};
