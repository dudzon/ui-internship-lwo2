// Solution 1st : use map to show number of characters in every array item,
// sort them and return last element in array

// export const findLongestWord = (str) =>{
// const result = str.split(' ')
// .map( (item) => item.length).sort((a, b)=>(a-b));
//   return result[result.length-1];
// };

// Solution 2: Use reduce and Math.max().

export const findLongestWord = (str)=>str.split(' ')
    .reduce( (prev, next) => Math.max(prev, next.length), 0);
