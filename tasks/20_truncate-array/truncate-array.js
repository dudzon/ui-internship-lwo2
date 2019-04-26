// Array mutation with splice method

export const truncateArray = (arr, num) => {
  arr.splice(0, num);
  return arr;
};
