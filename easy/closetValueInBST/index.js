const {
  BinaryTree,
  createTree
} = require("../tools/");

const check = (tree, target, prop) => {

    let tmp = Math.abs(tree.value - target);
    if(prop.x === null) prop.x = tmp;

    if(tmp <= prop.x) {

      prop.x = tmp;
      prop.v = tree.value;

    }

    if(tree.left && tree.left.value) check(tree.left, target, prop);
    if(tree.right && tree.right.value) check(tree.right, target, prop);

}

const findClosestValueInBst = (tree, target) => {

  let prop = {x:null, v:null};
  check(tree, target, prop);

  return prop.v;

}

let bt = new BinaryTree();
let lc = Math.random() * 10 | 0 + 1;
let rc = Math.random() * 10 | 0 + 1;
createTree(bt, lc, rc)

let target = 10;
console.log(findClosestValueInBst(bt, target));
