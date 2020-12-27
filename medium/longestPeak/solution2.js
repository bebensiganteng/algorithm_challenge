function longestPeak(array) {
  let count = 0;
	let i = 1;

	while(i < array.length - 1) {

		const isPeak = array[i-1] < array[i] && array[i+1] < array[i];

		if(!isPeak) {
			i++;
			continue;
		}

		let incline = i-2;
		while(incline >= 0 && array[incline] < array[incline+1]) {
			incline--;
		}

		let decline = i+2;
		while(decline < array.length && array[decline] < array[decline-1]) {
			decline++;
		}

		const currentPeakLength = decline - incline - 1;
		count = Math.max(count, currentPeakLength);
		i = decline;

	}

	return count;
}


let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3] //6
// let array = [1, 3, 2]; //3
// let array = [1, 2, 3, 2, 1, 1]; //5
console.log(longestPeak(array));
