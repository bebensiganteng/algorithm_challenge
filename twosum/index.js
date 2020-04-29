const twoSum = (nums, target) => {

  let hash = {};
  let i = 0;

  while(i < nums.length) {
    hash[nums[i]] = i;
    i++;
  }

  i = 0;
  while(i < nums.length) {

    let tmp = target - nums[i];
    if(hash[tmp] && hash[tmp] != i ) return [hash[tmp], i];

    i++;
  }

  return [];

}

let arr = [3,2,4]
let x = 6;

console.log(twoSum(arr,x));
