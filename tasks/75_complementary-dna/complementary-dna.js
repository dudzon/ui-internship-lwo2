export const DNAStrand = ( str ) => {
  return str.split('').map(( item ) => {
    switch ( item ) {
      case 'G':
        item = 'C';
        break;
      case 'C':
        item = 'G';
        break;
      case 'A':
        item = 'T';
        break;
      case 'T':
        item = 'A';
        break;
    }
    return item;
  }).join('');
};
