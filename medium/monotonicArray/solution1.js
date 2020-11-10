function isMonotonic(array) {

  if(array.length === 1) return true;

  let prev;
  let type = null;
  let prevType = null;


  for (var i = 0; i < array.length; i++) {
    const v = array[i];

    if(i > 0) {

      if(prev !== v) {
        if(prev < v) type = 0;
        if(prev > v) type = 1;
      }

      if(type !== null && prevType !== null && prevType != type) return false;

      prevType = type;

    }

    prev = v;
  }

  return true;
}

// const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// const array = [5, 15, 20, 10];
const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];

console.log(isMonotonic(array));
