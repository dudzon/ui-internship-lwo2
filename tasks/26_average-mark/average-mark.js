/* eslint-disable max-len */
export const getAverage = (arr) => Math.floor(arr.reduce( (prev, next) =>prev+next, 0)/arr.length);
