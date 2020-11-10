function moveElementToEnd(array, toMove) {

  let obj = null;

  for (var i = 0; i < array.length; i++) {

    const item = array[i];

    if(
      item === toMove
    ) {

      if(!obj) {
        obj = {
          i: i,
          v: item
        }
      }

    } else {

      if(obj) {

        const v = obj.v;
        const curr = obj.i;
        const next = curr + 1;

        if(array[next] === toMove) {

          obj = {
            i: next,
            v: v
          }

        } else {

          obj = {
            i: i,
            v: v
          }

        }

        array[i] = v;
        array[curr] = item;

      }
    }

  }

  return array;

}

const array = [2, 1, 2, 2, 2, 3, 4, 2]
// [2, 1, 5, 2, 2, 3, 4, 2]
// [1, 2, 5, 2, 2, 3, 4, 2]
// [1, 5, 2, 2, 2, 3, 4, 2]
// [1, 5, 2, 2, 2, 3, 4, 2]

const toMove = 2
// Output [1, 3, 4, 2, 2, 2, 2, 2]
console.log(moveElementToEnd(array, toMove));
