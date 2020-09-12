const {
  BinaryTree,
  createTree
} = require("../tools/");

// Solution 2
function branchSums(root) {

	const sums = []
	recursive(root, 0, sums);
	return sums;

}

function recursive(node,  running, sums) {

	if(!node)  return;

	const tmp = running + node.value;

	if(!node.left && !node.right) {
		sums.push(tmp);
		return;
	}

	recursive(node.left, tmp,  sums);
	recursive(node.right, tmp,  sums);

}

// -----------------------------
//
let bt = new BinaryTree();
let lc = Math.random() * 10 | 0 + 1;
let rc = Math.random() * 10 | 0 + 1;
createTree(bt, lc, rc);

console.log(branchSums(bt));
