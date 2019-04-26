// It passes tests but it's not correct implementation.
// What about numbers like 111,112,213?
// I guess the endings are "th".I'll be thinking it over later.

export const humanizeFormat = (num)=>{
  if (!num) return '';
  const result = num.toString();
  const tail = result.slice(result.length-1);

  switch (tail) {
    case '1':
      return result + 'st';
    case '2':
      return result + 'nd';
    case '3':
      return result + 'rd';
    default:
      return result +'th';
  }
};
