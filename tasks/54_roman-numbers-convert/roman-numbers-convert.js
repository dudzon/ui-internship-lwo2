export const convertToRoman = ( num ) => {
  // eslint-disable-next-line max-len
  const romanLetters = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumber = '';
  let valuesArr = Object.values( romanLetters);

  // eslint-disable-next-line guard-for-in
  // for ( let i in valuesArr ) {
  //   while ( num - valuesArr[i] >= 0 ) {
  //     romanNumber += Object.keys( romanLetters )[i];
  //     num -= valuesArr[i];
  //   }
  // }
  let romanNumberKeys = Object.keys(romanLetters);
  valuesArr.forEach( (item, index) => {
    while ( num - item >= 0 ) {
      romanNumber += romanNumberKeys[index];
      num -=item;
    }
  });
  return romanNumber;
};

