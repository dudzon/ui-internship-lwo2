export const insert = ( str, insertable = '', position = 0 ) => {
  return `${str.slice( 0, position )}${insertable}${str.slice(position)}`;
};
