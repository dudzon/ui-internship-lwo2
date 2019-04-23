//  Sort array, and return the length of filtered elements
//  that are lower than val.
//  It mean's index number where val should be inserted into original array.
export const getIndexToInsert = (arr, val) =>arr.sort( (a, b) => a-b )
    .filter((elem) => elem <val).length;
