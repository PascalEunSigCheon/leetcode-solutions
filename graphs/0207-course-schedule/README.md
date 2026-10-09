# 207. Course Schedule

**Difficulty:** Medium
**Topics:** Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph

## Approach

### Optimal - DFS

Construct a mapping `courseToPrereqMap` where the keys are the courses and the values are arrays containing all the direct prerequisites of the course. Initialise a mapping `courseState` where all the values are `2`. This is to track the state of the course.

`0`: explored all the prerequisites and it's doable.
`1`: exploring right now
`2`: not yet explored

Define a recursive function with `course` as input. If the `courseState` is `0` return `true`, if `1` return `false`. If else, set it as `1` and if the `courseToPrereqMap` has `course`, go through all the prerequisites and for each prerequisite apply the recursion function. After the loop, set `courseState` as `0`.

Finally, for loop through all the courses, executing the recursive function for each course and if any of them returns `false` we return `false`. Otherwise, we return `true`.

#### Complexity

- Time: O(n) - we process all the nodes.
- Space: O(1) - we only track the two pointers.

### Optimal - BFS

#### Complexity

- Time: O(n) - we process all the nodes.
- Space: O(1) - we only track the two pointers.
