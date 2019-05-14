export const whatIsInAName = (arr, obj) => {
  let result = [];
  const keys = Object.keys(obj);
  result = arr.filter( (item) => {
    return keys.every( (key) =>{
      return item.hasOwnProperty(key) && item[key] === obj[key];
    });
  });

  return result;
};
