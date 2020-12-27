function summarize(incline,decline,now,count) {

  let all = 0;

  if(decline > 0) all = incline + decline + 1;
  return Math.max(all, count);

}

function longestPeak(array) {

  let now, next;
  let incline = 0, decline = 0;
  let i = 0, count = 0;

  while (i < array.length) {

    now = array[i];
    next = array[i+1];

    if(now !== next) {

      if(now < next) {

        if(decline > 0) {

          count = summarize(incline,decline,now,count);

          incline = 0;
          decline = 0;

        }

        incline++;
      }

      if(now > next && incline > 0) decline++;

    } else {

      count = summarize(incline,decline,now,count);
      incline = 0;
      decline = 0;

    }

    i++;

  }

  count = summarize(incline,decline,now,count);
  return count;

}


let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3] //6
// let array = [1, 3, 2]; //3
// let array = [1, 2, 3, 2, 1, 1]; //5
console.log(longestPeak(array));
