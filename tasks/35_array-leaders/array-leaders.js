// Run loop, and use slice to cut the remaining chunk of array
// and reduce to sum elements in this chunk.
// If the current element is bigger than this chunk, it's a leader.

export const arrayLeaders = ( arr ) => {
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    const nextElemSum = arr.slice(i + 1).reduce((prev, next) => prev + next, 0);
    if ( arr[i] > nextElemSum ) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
};
