export const traverseTree = ( tree, callback )=> {
  callback(tree);
  tree.children.forEach( (item) => traverseTree( item, callback ));
};
