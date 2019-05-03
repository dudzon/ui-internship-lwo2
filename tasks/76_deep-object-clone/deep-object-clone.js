export const deepClone = ( obj ) => {
  let result = {};
  Object.keys( obj ).forEach(( key ) => {
    const value = obj[key];
    result[key] = deep(value);
  });
  return result;
};

const deep = (value) => deepClone(value);
