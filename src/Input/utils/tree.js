export const forEachTreeElement = (tree, cb, predicate) => {
  if (tree.childNodes) {
    tree.childNodes.forEach((n) => {
      forEachTreeElement(n, cb, predicate);
    });
  }

  if ((!predicate || predicate(tree)) && cb) {
    cb(tree);
  }

  return tree;
};

export default {
  forEachTreeElement,
};
