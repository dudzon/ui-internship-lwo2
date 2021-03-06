const collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};

// export const updateRecords = ( id, prop, value ) =>{
//   if ( collection.hasOwnProperty(id)) {
//     if ( prop !== 'tracks' && value !== '') {
//       collection[id][prop] = value;
//     } else if ( prop === 'tracks' && !collection[id][prop] ) {
//       collection[id][prop] = [];
//       collection[id][prop].push(value);
//     } else if ( prop === 'tracks' && value !=='' ) {
//       collection[id][prop].push(value);
//     } else {
//       delete collection[id][prop];
//     }
//   }
//   return collection;
// };

export const updateRecords = ( id, prop, value ) => {
  if ( value === '') {
    delete collection[id][prop];
    return collection;
  }
  if ( prop === 'tracks') {
    if ( !collection[id][prop] ) {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop].push(value);
    }
  } else {
    collection[id][prop] = value;
  }
  return collection;
};
