const isValidSubsequence1 = (array, sequence) => {

  let next = -1;
  let i = 0;

  while(i < sequence.length) {

    const v = sequence[i];
    const c = array.indexOf(v);

    if(c > next) {
      array[c] = "x";
      next = c;
    } else {
      return false;
    }

    i++;

  }

  return true;

}

const isValidSubsequence = (array, sequence) => {

	let i0 = 0;
	let i1 = 0;

	while(i0 < array.length && i1 < sequence.length ) {
		if(array[i0] === sequence[i1]) i1++;
		i0++;
	}

	return i1 === sequence.length;
}

// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const seq =  [5, 1, 22, 10];
const array = [1, 1, 1, 1, 1];
const seq =  [1, 1, 1];
console.log(isValidSubsequence(array, seq));
