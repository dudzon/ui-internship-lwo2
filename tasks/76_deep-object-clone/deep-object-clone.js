export const deepClone = ( obj ) => {
  let result = {};
  Object.keys( obj ).forEach(( key ) => {
    const value = obj[key];
    if ( typeof (value) !== 'object' || value === null) {
      result[key] = value;
    } else {
      result[key] = deepClone(value);
    }
  });
  return result;
};


