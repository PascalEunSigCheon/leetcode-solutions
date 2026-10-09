/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  let front = 0;
  const output = [];

  while (front < queue.length) {
    const levelSize = queue.length - front;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue[front];
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      front++;
    }
    output.push(level);
  }

  return output;
}
