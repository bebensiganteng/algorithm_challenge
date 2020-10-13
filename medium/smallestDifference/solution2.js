
function smallestDifference(arrayOne, arrayTwo) {

  const sort1 = arrayOne.sort((a,b)=>a-b);
	const sort2 = arrayTwo.sort((a,b)=>a-b);
  let idx1 = 0;
  let idx2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (idx1 < sort1.length && idx2 < sort2.length) {
    let firstNum = sort1[idx1];
    let secondNum = sort2[idx2];
    if(firstNum < secondNum) {
      current = secondNum - firstNum;
      idx1++;
    } else if(secondNum < firstNum) {
      current = firstNum - secondNum;
      idx2++;
    } else {
      return [firstNum, secondNum]
    }

    if(smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;

}

const a = [-1, 5, 10, 20, 28, 3];
const b = [26, 134, 135, 15, 17]

// const input = {"arrayOne": [10, 0, 20, 25], "arrayTwo": [1005, 1006, 1014, 1032, 1031]}
// [25, 1005]
// const input = {"arrayOne": [10, 0, 20, 25, 2200], "arrayTwo": [1005, 1006, 1014, 1032, 1031]}
// [25, 1005]

// const input = {
//   "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
//   "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
// }
// // [-123, -124]

const input = {
  "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
  "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
}
// [530, 530]

console.log(smallestDifference(input["arrayOne"],input["arrayTwo"]));

// [ -1, 3, 5, 10, 20, 28 ]
// [ 15, 17, 26, 134, 135 ]

// = a - b;
// -5 - 5
// a - b = x
// -
