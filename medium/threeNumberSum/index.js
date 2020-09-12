function threeNumberSum(array, targetSum) {

  array.sort(function(a, b) {
		return a - b;
	})

  let i = 0;
  let tmp = [];

  while(i < array.length) {

    let a = array[i];
    // a + b + c = targetSum
    // b + c = targetSum - a
    let bc = targetSum - a;

    let j = i+1;
    while (j < array.length) {

      let b = array[j];
      // c = (targetSum - a) - b
      let c = bc - b;

      if(array.indexOf(c) > -1 && b < c) {
        tmp.push([a,b,c]);
      }

      j++;
    }

    i++;
  }

  return tmp;

}

let input = {"array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0}
// let input = {"array": [1, 2, 3], "targetSum": 6}
console.log(threeNumberSum(input["array"], input["targetSum"]));
