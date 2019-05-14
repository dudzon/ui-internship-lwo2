export function uniteUnique( args, ...rest ) {
  return [...new Set( args.concat(...rest) )];
}
