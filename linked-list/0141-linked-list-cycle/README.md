# 141. Linked List Cycle

**Difficulty:** Easy  
**Topics:** Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm

## Approach

### Brute force

There is no meaningful brute force approach.

### Optimal

We initialise two pointers: one fast pointer and one slow pointer which both start from `head`. We create a while loop where the fast pointer advances two times per loop and the slow pointer advances one time per loop. For every loop, we check if `fast === slow`, if yes then we return true. We continue the while loop while `fast && fast.next`. Outside the while loop, we return false.

#### Complexity

- Time: O(n) - we process all the nodes.
- Space: O(1) - we only track the two pointers.
