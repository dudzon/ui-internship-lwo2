// For in loop with String.replace method.
const entities = [
  {entity: '&amp;',
    sign: /&/g},
  {entity: '&lt;',
    sign: /</g},
  {entity: '&gt;',
    sign: />/g},
  {entity: '&apos;',
    sign: /'/g},
  {entity: '&quot;',
    sign: /"/g},
];

export const convertHTML = ( str ) => {
  // eslint-disable-next-line guard-for-in
  for ( let key in entities) {
    str = str.replace(entities[key].sign, entities[key].entity);
  }
  return str;
};
