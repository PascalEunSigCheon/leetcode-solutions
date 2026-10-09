/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let best = -Infinity;
  let left = 0;
  for (let right = 0; right < prices.length; right++) {
    if (prices[left] > prices[right]) {
      left = right;
      continue;
    }
    best = Math.max(best, prices[right] - prices[left]);
  }
  return best === -Infinity ? 0 : best;
}
