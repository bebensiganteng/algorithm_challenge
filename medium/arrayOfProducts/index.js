function arrayOfProducts(array) {

  let all = [];
  let i = 0;
  while (i < array.length) {

    let result = 1;
    let j = 0;

    while (j < array.length) {

      if(i !== j) result *= array[j];
      j++;

    }

    all[i] = result;

    i++;
  }

  return all;
}

// Sample Input
// `array = [5, 1, 4, 2]`
//           x
//              x
//                  x

//
// Sample Output
// ```
// [8, 40, 10, 20]
// // 8 is equal to 1 x 4 x 2
// // 40 is equal to 5 x 4 x 2
// // 10 is equal to 5 x 1 x 2
// // 20 is equal to 5 x 1 x 4
// ```
const input = [5,1,4,2];

console.log(arrayOfProducts(input));
