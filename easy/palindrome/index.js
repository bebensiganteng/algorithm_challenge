function isPalindrome(string) {

  let tmp = "";

  for(let i = string.length-1; i >= 0; i--) {

    tmp += string[i];

  }

  return tmp === string;

}

let input = "abcdcba";
console.log(isPalindrome(input));
