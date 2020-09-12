function caesarCipherEncryptor(string, key) {

  // char code range
  // 97 - 122
  const baseCode = 97;

  // Total alphabet = 26;
  const alpTot = 26

  let tmp = "";
  let mul = (key/alpTot | 0);

  for(let i = 0; i < string.length; i++) {

    let code = string[i].charCodeAt() - baseCode;
    let a = (code + key) - (alpTot * mul);
    let b = alpTot - a;

    code = (b <= 0) ? Math.abs(b) : a;
    tmp += String.fromCharCode(baseCode + code)

  }

  return tmp
}

let string = "xyz";
// let string = "abc";
let key = 2
console.log(caesarCipherEncryptor(string, key));
