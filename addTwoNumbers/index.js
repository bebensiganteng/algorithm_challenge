const {
  ListNode,
  add,
  check
} = require("../tools/");

var addTwoNumbers = (l1, l2) => {

  let list = new ListNode(0);
  let tmp0 = list;

  let tmp1 = l1;
  let tmp2 = l2;
  let f1 = 0;
  let a = 0;
  let b = 0;

  while(tmp1 || tmp2) {


    tmp0.next = new ListNode(0);
    tmp0 = tmp0.next;

    if(tmp1) {

      a = tmp1.val;
      tmp1 = tmp1.next;

    } else {

      a = 0;

    }

    if(tmp2) {

      b = tmp2.val;
      tmp2 = tmp2.next;

    } else {

      b = 0;

    }

    let t = a + b + f1;
    let f2 = t%10;
    f1 = t/10 | 0;

    tmp0.val = (f1 > 0) ? f2 : t;

  }

  if(f1 > 0) tmp0.next = new ListNode(f1)

  return list.next;

}

// const l1 = add([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
// const l2 = add([5,6,4]);
// const l1 = add([2,4,3]);
// const l2 = add([5,6,4]);
const l1 = add([5]);
const l2 = add([5]);

const r = addTwoNumbers(l1,l2);
console.log(check(r));
