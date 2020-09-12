
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let tmp = {};
  let i = 0;
  let m = 0;

  s.split('').forEach((item) => {

    if(!tmp[item]) {

      tmp[item] = 1;
      i++;

    } else {

      if(i > m) m = i;
      tmp = {};
      tmp[item] = 1;
      i = 1;

    }
  });

  return m

}

var lengthOfLongestSubstring1 = function(s) {

  let arr = [];
  let max = 0;

  s.split('').forEach((item, i) => {

    let index = arr.indexOf(item);
    
    if(index !== -1) {
      arr.splice(0, 1 + index);
    }

    arr.push(item);
    max = Math.max(arr.length, max);

  });

  return max;

}

// let input = "abcabcbb";
let input = "pwwkew";
// let input = "bbbbb";

let r = lengthOfLongestSubstring1(input);
console.log(r);
