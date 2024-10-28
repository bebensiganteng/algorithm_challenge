const nums = [0,0,1,1,1,2,2,3,3,4];

var checkDuplicate = function (obj, nums) {
  for (let i = obj.i; i < nums.length; i++) {
    const v = nums[i];
    if (obj.v !== v) return { v, i };
  }

  return null;
};

var removeDuplicates = function (nums) {

  if (nums.length === 0) return 0;

  let obj = { v: nums[0], i: 0 }, j = 1;

  for (let i = 0; i < nums.length; i++) {
    const result = checkDuplicate(obj, nums);
    if (result !== null) {
      obj = result;
      nums[j] = obj.v;
      j++;
    }
  }

  return j;

};
