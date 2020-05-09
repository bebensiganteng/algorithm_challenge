/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  const all = nums1.concat(nums2).sort((a,b) => {
    return a - b;
  });
  let mid = all.length / 2 | 0;

  // odd
  if(all.length%2 === 1) {
    return all[mid];
  }

  // even
  return (all[mid] + all[mid-1])/2;

};


// const input1 = [1, 3];
// const input2 = [2];
// const input1 = [1, 2];
// const input2 = [3, 4];
// const input1 = [1];
// const input2 = [4];
const input1 = [1, 2, 4 ,5];
const input2 = [6, 3, 10, 11];
const r = findMedianSortedArrays(input1, input2);
console.log(r);
