
function smallestDifference(arrayOne, arrayTwo) {
	
	const sort1 = arrayOne.sort((a,b)=>a-b);
	const sort2 = arrayTwo.sort((a,b)=>a-b);

	let result = null;
	let current = -1;

	for (var i = 0; i < sort1.length; i++) {

		const a = sort1[i];
		let tmpB = null;
		let prev = -1;

		for (var j = 0; j < sort2.length; j++) {
			const b = sort2[j];
			const tmp = Math.abs(a - b);
			// console.log(tmp, a,b);
			if(prev < 0) prev = tmp;

			if(tmp <= prev) {
				tmpB = b;
				prev = tmp;
			} else if(tmp > prev || tmp === 0) {
				break;
			}

		}

		if(current < 0) current = prev;
		if(prev <= current) result = [a,tmpB];
		if(prev === 0) break;

	}

	return result;

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
