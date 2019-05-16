/* eslint-disable no-unused-vars */
// Jesus Christ,humanYearsCatYearsDogYears ? Clever name :)

export const humanYearsCatYearsDogYears = ( humanYears ) =>{
  let catYears;
  let dogYears;
  let result = [];
  if ( humanYears > 0) {
    switch ( humanYears ) {
      case 1:
        result = [humanYears, catYears = 15, dogYears = 15];
        break;
      case 2:
        result = [humanYears, catYears = 24, dogYears = 24];
        break;
      default:
        // eslint-disable-next-line max-len
        result = [humanYears, catYears = 24 + ( humanYears - 2 ) * 4, dogYears = 24 + ( humanYears - 2 ) * 5];
    }
    return result;
  } else {
    throw new Error('You are not alive');
  }
};
