/* eslint-disable max-len */
// export const formatWorkingHours = ( input ) => {
//   let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'dummyDay'];
//   if ( input.length ) {
//     let result = [];
//     let first = null; let last = null; let currentFrom = null; let currentTo = null;
//     for ( let day of days ) {
//       const workday = input.find((el) => el.day === day);

//       if (first && ( !workday || currentFrom != workday.from || currentTo != workday.to )) {
//         let firstLine = first.toUpperCase();
//         if (last) firstLine += ` - ${last.toUpperCase()}`;
//         firstLine += `: ${currentFrom} - ${currentTo}`;
//         result.push( firstLine );
//         first = null;
//         last = null;
//       }

//       if ( workday && !first ) {
//         first = workday.day;
//         currentFrom = workday.from;
//         currentTo = workday.to;
//       } else if (first) {
//         last = day;
//       }
//     }
//     return result;
//   }
//   return [];
// };

//  Solution 2: It is really shitty code, with harcoded values but it's with grouping as Misha wanted me to do.
//  I don't like this solution but at least I'm creative :-)  How to use reduce method in this case?

// let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// export const formatWorkingHours = (input) =>{
//   if ( input.length ) {
//     let result = [];
//     for ( let value of Object.values(input)) {
//       result.push(Object.values(value));
//     }
//     let resultWithGroups = [];
//     let group1 = [];
//     let group2 = [];
//     let group3 = [];
//     let group4 = [];

//     for ( let i = 0; i < days.length; i++) {
//       let workday = result.find( (element) => element[0] === days[i]);
//       switch ( workday[1]) {
//         case '11:00':
//           group1.push(workday);
//           break;
//         case '12:00':
//           group2.push(workday);
//           break;
//         case '10:00':
//           group3.push(workday);
//       }
//     }
//     group4.push(group1.pop());
//     resultWithGroups = [group1[0][0].toUpperCase() + ' - ' + group1[2][0].toUpperCase() + ': ' + group1[0][1] + ' - ' + group1[0][2],
//       group2[0][0].toUpperCase() + ' - ' + group2[1][0].toUpperCase() + ': ' + group2[0][1] + ' - ' + group2[0][2],
//       group3[0][0].toUpperCase() + ': ' + group3[0][1] + ' - ' + group3[0][2],
//       group4[0][0].toUpperCase() + ': ' + group4[0][1] + ' - ' + group4[0][2]];

//     return resultWithGroups;
//   }
//   return [];
// };

export const formatWorkingHours = (workdays) => {
  const time = {};
  workdays.forEach( ( item ) => time[item.day] = `${item.from} - ${item.to}` );

  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  let result = [];
  let startDay = '';
  let endDay = '';
  days.forEach((day, i) => {
    if ( i === 0 ) {
      startDay = day;
      endDay = day;
      return;
    }
    if ( time[day] === time[days[i -1]] ) {
      endDay = day;
    } else {
      add( startDay, endDay, time[startDay], result );
      startDay = days[i];
      endDay = days[i];
    }
  });
  add( startDay, endDay, time[startDay], result );
  return result;
};

function add( startDay, endDay, time, result ) {
  if ( startDay === endDay && time != null ) {
    result.push( `${startDay.toUpperCase()}: ${time}` );
  }
  if ( endDay !== startDay && time != null ) {
    result.push( `${startDay.toUpperCase()} - ${endDay.toUpperCase()}: ${time}` );
  }
}
