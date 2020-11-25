function traverse(array,tmp,props) {

  if(tmp.length > props.maxL) return;

  const item = array[props.y][props.x];
  if(item === undefined) return;
  tmp.push(item);
  // console.log(`dir: ${props.dir} [x:${props.x}, y:${props.y}] ${array[props.y][props.x]}`);

  if(
    props.dir === 0 &&
    props.x < props.maxX
  ) {

    props.x++;
    return traverse(array,tmp,props);

  }

  if(
    props.dir === 1 &&
    props.y < props.maxY
  ) {

    props.y++;
    return traverse(array,tmp,props);

  }

  if(
    props.dir === 2 &&
    props.x > props.minX
  ) {

    props.x--;
    return traverse(array,tmp,props);

  }

  if(
    props.dir === 3 &&
    props.y > props.minY
  ) {

    props.y--;
    return traverse(array,tmp,props);

  }

  props.dir++;
  if(props.dir > 3) props.dir = 0;

  switch (props.dir) {
    case 0:
      props.x++;
      props.minX = props.x;
      break;
    case 1:
      props.y++;
      props.minY = props.y;
      break;
    case 2:
      props.x--;
      props.maxX = props.x;
      break;
    case 3:
      props.y--;
      props.maxY = props.y;
      break;

  }

  return traverse(array,tmp,props);

}

function spiralTraverse(array) {

  let tmp = [];

  let props = {
    x: 0,
    y: 0,
    maxX: array[0].length - 1,
    maxY: array.length - 1,
    minX: 0,
    minY: 0,
    dir: 0,
    maxL: (array.length * array[0].length) - 1
  }

  traverse(array,tmp,props);
  return tmp;

}

array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]
// array = [
//   [19, 32, 33, 34, 25, 8],
//   [16, 15, 14, 13, 12, 11],
//   [18, 31, 36, 35, 26, 9],
//   [1, 2, 3, 4, 5, 6],
//   [20, 21, 22, 23, 24, 7],
//   [17, 30, 29, 28, 27, 10]
// ]
console.log(spiralTraverse(array));
