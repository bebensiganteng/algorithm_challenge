function bubbleSort(array) {

  let pass = true;

  while(pass) {

    let i = 0;
    pass = false;

    while(i < array.length) {

      let n = i+1
      let curr = array[i];
      let next = array[n];

      if(curr > next) {

        pass = true;
        array[i] = next;
        array[n] = curr;

      }

      i++;
    }

  }

  return array;
}

let input = [8, 5, 2, 9, 5, 6, 3]
//5,8,2,9,5,6,3
// [2, 3, 5, 5, 6, 8, 9]
console.log(bubbleSort(input));
