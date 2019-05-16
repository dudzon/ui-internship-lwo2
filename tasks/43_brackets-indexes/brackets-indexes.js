// First we check if there is a bracket at index position,
// then we set bracketPosition to 1 and we run loop to make
// bracketPosition === 0 . With every  opening bracket we increment
// bracketPosition and decrement when we encounter closing bracket.
// bracketPosition === 0 means that we've matched closing bracket
// of initial bracketPosition, and we return index in loop.

export const findCloseIndex = (str, index) => {
  if (str[index] !== '(') {
    return -1;
  }
  let bracketPosition = 1;
  for (let i = index + 1; i < str.length; i++) {
    if (str[i] === '(') {
      bracketPosition++;
    } else if (str[i] === ')') {
      bracketPosition--;
    }

    if (bracketPosition === 0) {
      return i;
    }
  }
  return -1;
};
