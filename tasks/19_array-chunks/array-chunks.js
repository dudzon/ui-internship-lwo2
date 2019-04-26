// Make an empty array and push into subarray chunk,
// it's length is determined by num argument
// but we keep track of our position inside
// an array by changing pointer ( index)

export const arrayChunks = ( arr, num)=>{
  const result = [];
  let index = 0;

  while ( index < arr.length) {
    result.push(arr.slice(index, index + num));
    index += num;
  }
  return result;
};


