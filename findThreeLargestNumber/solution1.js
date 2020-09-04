function findThreeLargestNumbers(array) {

  let tmp = [];

  array.forEach((item) => {

    if(!tmp.length) {

      tmp.push(item);

    } else {

      let i = tmp.length - 1;

      while(i >= 0) {

        const v = tmp[i];

        if(item > v) {

          if(i === tmp.length - 1) {

            tmp.push(item);

          } else {

            tmp.splice(i+1, 0, item);

          }

          break;

        } else if(item < v) {

          if(tmp.length === 1 || i === 0) {

            tmp.unshift(item);
            break;

          }

        } else if(item === v) {
          tmp.unshift(item);
          break;
        }

        i--;

      }

    }

  });

  if(tmp.length > 3) tmp.splice(0, tmp.length - 3);

  return tmp;

}

// let input = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
// let input = [10, 5, 9, 10 , 12];
// let input = [55, 7, 8];
// let input = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]; //[7, 7, 7]
let input = [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]; //[7, 7, 8]

console.log(findThreeLargestNumbers(input));
