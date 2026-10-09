# 121. Best Time to Buy and Sell Stock

**Difficulty:** Easy  
**Topics:** Array, Dynamic Programming

## Approach

### Brute force

Loop over prices (`i`), and nested loop over prices (`j`). Initialise the best tracking variable `best = -Infinity`. For each loop, we compute `best = Math.max(best, prices[j] - prices[i])`. Finally return, `best === -Infinity ? 0 : best`.

#### Complexity

- Time: O(n^2) - nested loops
- Space: O(1) - tracking the best deal.

### Optimal

Initialise a pointer `left = 0` and loop `right = 0 ... prices - 1`. Initialise the best tracking variable `best = -Infinity`. For each loop, if `prices[right] < prices[left]`, we make `left = right` and `continue` else we compute `best = Math.max(best, prices[right] - prices[left])`. Finally return, `best === -Infinity ? 0 : best`.

#### Complexity

- Time: O(n) - only one for loop.
- Space: O(1) - tracking the best deal and the pointers.
