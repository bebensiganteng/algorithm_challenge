function insertionSort(array) {

  let i = 1;

  while(i < array.length) {

    let prev = array[i-1];
    let curr = array[i];

    if(prev > curr) {

      if(i === 1) {

        swap(array, i, 0);

      } else {

        let j = i-2;

        while(j >= 0) {

          prev = array[j];

          if(prev < curr) {
            swap(array, i, j+1);
            break;
          }

          j--;

        }

        if(j < 0) {
          swap(array, i, 0);
        }

      }

    }

    i++;

  }

  return array;
}

function swap(array, i, j) {

  let num = array.splice(i,1);
  array.splice(j,0,num[0]);

}

let input = [8, 5, 2, 9, 5, 6, 3];

console.log(insertionSort(input));
