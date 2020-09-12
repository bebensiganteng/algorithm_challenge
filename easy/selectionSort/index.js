function selectionSort(array) {

  let i = 0;
  
  while(i < array.length) {

    let min = i;
    let j = i+1;

    while(j < array.length) {

      if(array[j] < array[min]) {

        min = j;
      }

      j++;
    }

    if(min != i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }


    i++;
  }

  return array;
}

let input = [8, 5, 2, 9, 5, 6, 3];
console.log(selectionSort(input));
