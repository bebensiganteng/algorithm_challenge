import {BuildBST} from "../../tools/index.mjs";

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(value < this.value) {
			if(this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if(this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
    return this;
  }

  contains(value) {
    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}


const data = {
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": null, "right": null, "value": 15},
      {"id": "5", "left": "2", "right": null, "value": 5},
      {"id": "2", "left": null, "right": null, "value": 2}
    ],
    "root": "10"
  }
}

const build = (data)=> {

  const {nodes,root} = data.tree;
  let bst = new BST(root);

  let i = 1;
  while (nodes[i]) {

    const tmp = bst.insert(nodes[i].value);
    bst = tmp;

    i++;
  }

  return bst;

}

const b = BuildBST(data,BST);
