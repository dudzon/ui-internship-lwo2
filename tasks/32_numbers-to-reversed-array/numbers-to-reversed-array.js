export const numberToReversedArray = ( str ) => str.toString()
    .split('')
    .reverse()
    .map( (item) => +item );

