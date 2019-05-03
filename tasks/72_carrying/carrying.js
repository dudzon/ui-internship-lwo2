export function addTogether( ...args ) {
  if ( args.length === 1 ) {
    if ( typeof( args[0] ) !== 'number' ) {
      return undefined;
    } else {
      return function( param ) {
        if ( typeof( param ) !== 'number' ) {
          return undefined;
        } else {
          return args[0] + param;
        }
      };
    }
  }
  if ( args.length === 2) {
    if (typeof( args[0] ) !== 'number' || typeof( args[1] ) !=='number' ) {
      return undefined;
    } else {
      return args[0] + args[1];
    }
  }
}
