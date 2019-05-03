/* eslint-disable max-len */
export const binaryEncode = (str) => {
  if ( !str ) {
    return '';
  } else {
    return str.split('').map( (item) => item.charCodeAt(0).toString(2) )
        .map( (item) => item.length == 6 ? '00' + item.slice(0) : '0' + item.slice(0) )
        .join()
        .replace(/,/g, ' ');
  }
};
