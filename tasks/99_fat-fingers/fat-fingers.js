export const fatFingers = ( str ) => {
  let capsLock = false;
  let result = '';
  for ( let i = 0; i < str.length; i++) {
    if ( str.charCodeAt(i) === 97 || str.charCodeAt(i) === 65 ) {
      capsLock = !capsLock;
    } else {
      if (capsLock) {
        // eslint-disable-next-line max-len
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
  }
  return result;
};

