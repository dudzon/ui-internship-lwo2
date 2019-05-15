export const DNAStrand = ( str ) => {
  return str.split('').map(( item ) => {
    switch ( item ) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'A':
        return 'T';
      case 'T':
        return 'A';
    }
    return item;
  }).join('');
};
