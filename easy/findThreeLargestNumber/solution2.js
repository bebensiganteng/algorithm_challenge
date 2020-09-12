function findThreeLargestNumbers(array) {
  const tmp = [null, null, null];
	for(const num of array) {
		updateLargest(tmp, num);
	}
	return tmp;
}

function updateLargest(tmp, num) {
	if(tmp[2] === null || num > tmp[2]) {
		update(tmp, num, 2)
	} else if(tmp[1] === null || num > tmp[1]) {
		update(tmp, num, 1)
	} else if(tmp[0] === null || num > tmp[0]) {
		update(tmp, num, 0)
	}
}

function update(array, num, index) {
	for(let i = 0; i <= index; i++) {
		if(i === index) {
			array[i] = num;
		} else {
			array[i] = array[i+1];
		}
	}
}

// let input = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
// let input = [10, 5, 9, 10 , 12];
// let input = [55, 7, 8];
// let input = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]; //[7, 7, 7]
let input = [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]; //[7, 7, 8]

console.log(findThreeLargestNumbers(input));
