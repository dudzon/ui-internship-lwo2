export const nextInLine = (arr, item) =>{
  arr.push(item);
  const removed = arr.shift();
  return removed;
};


