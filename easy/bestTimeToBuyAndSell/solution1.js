// const p = [7,1,5,3,6,4];
// const p = [7,6,4,3,1];
// const p = [1,2,3,4,5];
const p = [2,1,2,0,1];

var checkTrend = function(i,prices) {

  let tmp;

  for(let j = i; j < prices.length; j++) {

    const today = prices[j];
    const tomorrow = prices[j+1] | 0;

    tmp = j;

    // check if the value dips on the next day.
    if(today > tomorrow) return tmp;

  }

  return false;

}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  if(prices.length === 0) return 0;

  let pf = [];
  let owned,nextCycle;

  for(let i = 0;i < prices.length;i++) {

    const today = prices[i];
    const tomorrow = prices[i+1];

    if(owned) {

      if(!nextCycle) nextCycle = checkTrend(i,prices);

      if(nextCycle === i) {
        console.log("--->",nextCycle,i)

        // sell
        const maxPrice = prices[nextCycle];
        pf.push(maxPrice - owned);
        nextCycle = null;
        owned = null;
      }


    }

    // buy the stock
    if(
      today < tomorrow &&
      owned == null
    ) {

      owned = today;

    }

  }

  if(pf.length === 0) return 0;
  if(pf.length <= 1) return pf[0];

  return pf.reduce((partialSum, a) => partialSum + a, 0);

}

const r = maxProfit(p);
console.log(r);


