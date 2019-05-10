/* eslint-disable max-len */
export const orbitalPeriod = ( satellites ) => {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  return satellites.map(( data ) => {
    let satelliteAlt = data.avgAlt;
    let totalRadius = earthRadius + satelliteAlt;
    let orbitalV = Math.sqrt( GM / totalRadius );
    let oPeriod = Math.round((( 2 * Math.PI ) * totalRadius ) / orbitalV );
    data.velocity = orbitalV.toFixed(4);
    data.orbitalPeriod = oPeriod;
    return {
      name: data.name,
      orbitalPeriod: data.orbitalPeriod,
    };
  });
};
