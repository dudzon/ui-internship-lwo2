export const pairElement = ( str ) => {
  return str.split('').map(( item ) => {
    switch ( item ) {
      case 'G':
        return ['G', 'C'];
      case 'C':
        return ['C', 'G'];
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
    }
    return item;
  });
};
