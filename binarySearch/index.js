function iterative(array, target, min, max) {

  let l = max - min;
  if(l < 1) return -1;

  let mid = min + (l * .5 | 0);
  let v = array[mid];
  if(v === target) return mid;

  if(target < v) {
    return iterative(array, target, min, mid);
  } else {
    return iterative(array, target, mid+1, max);
  }

}

function binarySearch(array, target) {

  return iterative(array, target, 0, array.length);

}

// let input = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
// let target = 33;
let input = [1, 5, 23, 111]
let target = 35;
// let input = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
// let target =  0;
// let input = [1, 5, 23, 111];
// let target = 5;
console.log(binarySearch(input, target));
