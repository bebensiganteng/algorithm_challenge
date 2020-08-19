class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {

		if(array.length === 0) array.push(this.name);

    this.children.forEach((item) => {
			array.push(item.name);
      if(item.children.length > 0) item.depthFirstSearch(array);
    });

		return array;
  }
}
