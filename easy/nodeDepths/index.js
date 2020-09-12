const {
  BinaryTree,
  createTree
} = require("../tools/");

let sum = 0;

function nodeDepths(root) {

  sum = 0;
  recursive(root, -1);

  return sum
}

function recursive(node, prev) {

  if(!node) return;

  let tmp = prev + 1;
  sum += tmp;

  recursive(node.left, tmp);
  recursive(node.right, tmp);
}

// -----------------------------
//
let bt = new BinaryTree();
let lc = Math.random() * 10 | 0 + 1;
let rc = Math.random() * 10 | 0 + 1;
createTree(bt, lc, rc);

console.log(nodeDepths(bt));
