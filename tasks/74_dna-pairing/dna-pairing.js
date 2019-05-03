export const pairElement = ( str ) => {
  return str.split('').map(( item ) => {
    switch ( item ) {
      case 'G':
        item = ['G', 'C'];
        break;
      case 'C':
        item = ['C', 'G'];
        break;
      case 'A':
        item = ['A', 'T'];
        break;
      case 'T':
        item = ['T', 'A'];
        break;
    }
    return item;
  });
};
