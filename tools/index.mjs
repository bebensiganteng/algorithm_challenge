/*
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
*/

export function BuildBST(data,BST) {

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
