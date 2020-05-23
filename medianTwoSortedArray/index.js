/**
 * BRUTE FORCE
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {

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

var findMedianSortedArrays2 = function(nums1, nums2) {

  const total = nums1.length + nums2.length;
  const isOdd = (total%2 === 1) ? 1 : 0;
  let mid = (total/2 | 0) + isOdd;
  let count = 0;
  let i = 0
  let j = 0;
  let r = 0;
  let a = null;
  let b = null;


  while(count < mid) {

    let tmpA = null;
    let tmpB = null;

    if(a === null) {
      a = (nums1[i]) ? nums1[i] : nums2[j+1] ? nums2[j+1] : nums2[nums2.length - 1];
    }

    if(b === null) {
      b = (nums2[j]) ? nums2[j] : nums1[i+1] ? nums1[i+1] : nums1[nums1.length - 1];
    }

    r = (isOdd) ? Math.min(a, b) : (a + b)/2;

    if(a === b) {

      if(nums1[i+1] > nums2[j]) {
        j++;
      } else {
        i++;
      }
      // i++;
      // j++;
    } else if(a < b) {
      i++;

      if(nums1[i] && nums2[j+1]) {
        tmpA = Math.min(nums1[i], nums2[j+1]);
      }

    } else {
      j++;

      if(nums1[i+1] && nums2[j]) {
        tmpB = Math.min(nums1[i+1], nums2[j]);
      }

    }

    a = tmpA;
    b = tmpB;

    count++;

  }

  return r;

}

// I honestly couldn't cracked this without watching Tushar Roy's vid
// https://www.youtube.com/watch?v=LPFhl65R7ww&t=0s
var findMedianSortedArrays = function(nums1, nums2) {

  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  let x = nums1.length
  let y = nums2.length
  let low = 0;
  let high = x;

  while(low <= high) {

    const partitionX = (high + low) >> 1
    const partitionY = ((x + y + 1) >> 1) - partitionX

    const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

    const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
    const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]

    if(maxX <= minY && maxY <= minX) {

      const lowMax = Math.max(maxX, maxY)
      if( (x + y) % 2 == 1) return lowMax;

      return (lowMax + Math.min(minX, minY)) / 2

    } else if(maxX < minY) {

      low = partitionX + 1;

    } else {

      high = partitionX - 1;

    }
  }
}

const test = [
  {
    a: [1, 3],
    b: [2]
  },
  {
    a: [1, 2],
    b: [3, 4]
  },
  {
    a: [1],
    b: [4]
  },
  {
    a: [1, 2, 4 ,5],
    b: [6, 10, 11]
  },
  {
    a: [],
    b: [1]
  },
  {
    a: [2],
    b: []
  },
  {
    a: [],
    b: [2,3]
  },
  {
    a: [],
    b: [1,2,3,4]
  },
  {
    a: [1,2,3,4],
    b: []
  },
  {
    a: [1,2],
    b: [-1,3]
  }, {
    a: [1,1,3,3],
    b: [1,1,3,3]
  },
  {
    a: [1,2],
    b: [1,1]
  },
  {
    a: [4],
    b: [1,2,3]
  }
]

let i = 0;
while (i < test.length) {

  const {a,b} = test[i];

  let r = findMedianSortedArrays(a, b);
  let t = findMedianSortedArrays1(a, b)

  if(r !== t) {

    console.error("result", r, "should be", t);
    console.log(a, b);

    break;
  }
  i++;

}

console.log("Passed!");
