
function iterative(array, multiplier) {

  let sum = 0;

  array.forEach((v) => {

    if(Array.isArray(v)) {

      sum += (multiplier * iterative(v, multiplier + 1));

    } else {

      sum += v;
    }

  });

  return sum;

}

function productSum(array) {

  return iterative(array, 2);

}

const input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
console.log(productSum(input));
