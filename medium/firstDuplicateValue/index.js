function firstDuplicateValue(array) {

  let obj = {};
  let i = 0;
  while (i < array.length) {

    const v = array[i];
    if(obj[v] === undefined) {
      obj[v] = 1
    } else {
      return v;
    }
    i++;
  }

  return -1;
}

const array = [2, 1, 5, 2, 3, 3, 4];
// const array = [2, 1, 5, 3, 3, 2, 4];
console.log(firstDuplicateValue(array));
