const ListNode = function(val) {
   this.val = val;
   this.next = null;
}

const BinaryTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

const createTree = function(b, lc, rc) {

  b.value = Math.random() * 100 | 0;

  if(lc > 0) {
    b.left = new BinaryTree();
    createTree(b.left, --lc, rc);
  }

  if(rc > 0) {
    b.right = new BinaryTree();
    createTree(b.right, lc, --rc);
  }

}

const add = (arr) => {

  let l = null, tmp = null;

  arr.forEach((v, i) => {

    if(i == 0) {

      l = new ListNode(v);
      tmp = l;

    } else {

      tmp.next = new ListNode(v);
      tmp = tmp.next;

    }

  });

  return l;
}

const check = (l) => {

  if(!l || l.val === null) return "empty";

  let max = 100;
  let tmp = l;
  let str = l.val;

  while(tmp && tmp.next) {

    tmp = tmp.next;

    if(tmp && tmp.val != undefined) {
      str += "→" + tmp.val;
    }

    if(max < 1) {
      str += "→n";
      break;
    }
    max--;
  }

  return str;

}

// ----------

const combine = (l) => {

  let tmp = l;
  var arr = [l.val];

  while(tmp && tmp.next) {

    tmp = tmp.next;

    if(tmp && tmp.val != undefined) {
      arr.push(tmp.val);
    }

  }

  return parseInt(arr.reverse().join(""));

}

const addL = (arr) => {

  let l = null, tmp = null;

  arr.forEach((v, i) => {

    v = parseInt(v);

    if(i == 0) {

      l = new ListNode(v);
      tmp = l;

    } else {

      tmp.next = new ListNode(v);
      tmp = tmp.next;

    }

  });

  return l;
}

// export {ListNode,add,check}
module.exports = {
  ListNode,
  BinaryTree,
  createTree,
  add,
  check
};
