# 155. Min Stack

**Difficulty:** Medium  
**Topics:** Stack, Design

## Approach

### Brute force

There is no meaningful brute force approach if we are to implement the methods with O(1) time complexity.

### Optimal

The method corresponds well to the array data structure. The difficult method to implement given the time complexity requirement is the `getMin` method because for an array, looking for the minimum value has the time complexity O(n) because we would potentially have to inspect every element. We get around this by tracking the minimum value when each value is inserted alongside the value we are inserting so that each stack stores `[value, minimum-value-so-far]`.

#### Complexity

- Time: O(1) - by design the time complexity is O(1) for each method
- Space: O(n) - the stack can contain up to O(n) nodes
