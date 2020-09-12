let table = {
  'a':0,
  'b':1,
  'c':2,
  'd':3,
  'e':4,
  'f':5,
  'g':6,
  'h':7,
  'i':8,
  'j':9,
  'k':10,
  'l':11,
  'm':12,
  'n':13,
  'o':14,
  'p':15,
  'q':16,
  'r':17,
  's':18,
  't':19,
  'u':20,
  'v':21,
  'w':22,
  'x':23,
  'y':24,
  'z':25
}

let alp = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipherEncryptor(string, key) {

  // Total alphabet = 26;
  const alpTot = 26

  let tmp = "";
  let mul = (key/alpTot | 0);

  for(let i = 0; i < string.length; i++) {

    let j = table[string[i]]
    let a = (j + key) - (alpTot * mul);
    let b = alpTot - a;

    tmp += alp[(b <= 0) ? Math.abs(b) : a]

  }

  return tmp;

}

let string = "abc";
let key = 52

// let string = "xyz";
// let key = 2

console.log(caesarCipherEncryptor(string, key));
