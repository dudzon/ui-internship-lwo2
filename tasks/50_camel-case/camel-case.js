
// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  // eslint-disable-next-line max-len
  return this.split(' ').map((item) => item = item.slice(0, 1).toUpperCase() + item.slice(1) ).join('');
};


