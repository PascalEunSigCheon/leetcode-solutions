# 102. Binary Tree Level Order Traversal

**Difficulty:** Medium  
**Topics:** Tree, Breadth-First Search, Binary Tree

## Approach

### Brute force

There is no meaningful brute force approach for this problem.

### Optimal

Scan through the tree using BFS:

1. Initiate a queue with the root and a pointer variable.
2. We continue scanning while pointer variable has not reached the end of the queue.
3. Every loop, we figure out the level size by `queue.length-front` and initialise level
4. Every time we process a node in the queue at the pointer variable, we store it in the level and we see if there is a left or right node.
5. If yes then, we add to the queue.
6. We add the level to the overall output array and we continue the while loop.

#### Complexity

- Time: O(n) - every node is processed once
- Space: O(n) - the queue can contain up to O(n) nodes
