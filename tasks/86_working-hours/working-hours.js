/* eslint-disable max-len */
export const formatWorkingHours = ( input ) => {
  let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'dummyDay'];
  if ( input.length ) {
    let result = [];
    let first = null; let last = null; let currentFrom = null; let currentTo = null;
    for ( let day of days ) {
      const workday = input.find((el) => el.day === day);

      if (first && ( !workday || currentFrom != workday.from || currentTo != workday.to )) {
        let firstLine = first.toUpperCase();
        if (last) firstLine += ` - ${last.toUpperCase()}`;
        firstLine += `: ${currentFrom} - ${currentTo}`;
        result.push( firstLine );
        first = null;
        last = null;
      }

      if ( workday && !first ) {
        first = workday.day;
        currentFrom = workday.from;
        currentTo = workday.to;
      } else if (first) {
        last = day;
      }
    }
    return result;
  }
  return [];
};
