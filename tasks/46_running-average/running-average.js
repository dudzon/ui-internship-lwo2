// It is a simple closure.
export const runningAverage = () => {
  let counter = 0;
  let sum = 0;
  return function( arg ) {
    sum += arg;
    counter++;
    let average = sum/counter;
    return average;
  };
};
