/* eslint-disable max-len */
export const nbMonths = ( startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) => {
  let moneySaved = 0;
  let moneyLeft = 0;
  let months = 0;

  if ( startPriceOld < startPriceNew ) {
    do {
      months++;
      if (months % 2 === 0) {
        percentLossByMonth += 0.5;
      }
      moneySaved += savingsPerMonth;
      startPriceOld = startPriceOld - ( startPriceOld * percentLossByMonth ) / 100;
      startPriceNew = startPriceNew - ( startPriceNew * percentLossByMonth ) / 100;
    } while (( moneySaved + startPriceOld ) < startPriceNew );
    moneyLeft = Math.round(( moneySaved + startPriceOld ) - startPriceNew );
  } else {
    moneyLeft = Math.round( startPriceOld - startPriceNew );
  }


  return [months, moneyLeft];
};
