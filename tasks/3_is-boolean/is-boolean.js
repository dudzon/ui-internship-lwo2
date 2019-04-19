
// 1st solution: convert input into boolean and then compare types:
// export const isBoolean = input => !!input === input

// 2nd solution: Use typeof operator
//export const isBoolean = input => 'boolean' === typeof input;

// 3rd solution: use Boolean object

export const isBoolean = input => Boolean(input) === input;