/* eslint-disable max-len */
// eslint-disable-next-line camelcase
export const validate_bet = (arr, str) => {
  const pattern = /([\d\s,]+)/g;
  const onlyNumbers = str.match(/\d/g);
  const onlyAcceptedChars = str.match(pattern);
  const newCharsArrayLength = onlyAcceptedChars.join('').length;
  const isBiggerThanM = str.split(' ').some(( item ) => item > arr[1]);

  if ( str.length === newCharsArrayLength && arr[0] === onlyNumbers.length && !isBiggerThanM ) {
    return onlyNumbers.sort(( a, b ) => a - b );
  } else {
    return 'None';
  }
};
