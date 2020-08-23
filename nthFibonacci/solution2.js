function getNthFib(n) {

  if(!n) return;

  let curr = 1;
  let prev = 0;

  while(n > 2) {

    let next = curr + prev;
    prev = curr;
    curr = next;

    n--;
  }

  return curr;
  
}

getNthFib(0);
