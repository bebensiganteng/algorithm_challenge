const {
  BinaryTree,
  createTree
} = require("../tools/");

// Solution 1
function recursive(root, all, tmp) {

  if(!root) return all

  if(root.left || root.right) {

    let child;

    if(root.d === undefined) {

      // check the left node first
      if(root.left) {
        child = root.left;
        root.d = 0;
      } else {
        child = root.right;
        root.d = 1;
      }

      // save nodes inside the array
      tmp.push(root);

    } else {

      // if the right node has already been checked, check the parent
      if(root.d === 1) {

        return recursive(tmp.pop(), all, tmp);

      } else if (root.right) {

        child = root.right;
        root.d = 1;
        tmp.push(root);

      } else {

       return recursive(tmp.pop(), all, tmp);

     }

    }

    return recursive(child, all, tmp);

  } else {

    // end of nodes
    let sum = root.value;

    tmp.forEach((item, i) => {

      sum += item.value;

    });

    all.push(sum);
    return recursive(tmp.pop(), all, tmp);

  }

}

function branchSums(root) {

  let all = [];
  let tmp = [];

  return recursive(root, all, tmp);

}

// -----------------------------
//
let bt = new BinaryTree();
let lc = Math.random() * 10 | 0 + 1;
let rc = Math.random() * 10 | 0 + 1;
createTree(bt, lc, rc);

console.log(branchSums(bt));
