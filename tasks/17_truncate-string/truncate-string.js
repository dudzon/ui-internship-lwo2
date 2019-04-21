export const truncateString = (str, num)=>{
  let result = '';
  if ( str.length > num) {
    result = str.slice(0, num-3) +'...';
  } else {
    result = str.slice();
  }
  if ( num <= 3) {
    result = str.slice(0, num) + '...';
  }
  return result;
};
