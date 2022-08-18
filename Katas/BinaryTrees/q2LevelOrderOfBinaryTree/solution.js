const { TreeNode } = require("../binaryTree");

const tree = new TreeNode(3);
tree.insert([
  6,
  1,
  9,
  2,
  null,
  4,
  null,
  5,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
]);

// 1. Identify level in the tree
// 2. Initialize subarray
// 3. Push finished subarray into result

// time: O(n)
// space: O(n/2) - this is te rule for full binary tree
// the lowest level is equal to all previous nodes + 1 (from where he took this 1?)
// of course when all the levels all full of nodes

// so after dropping constants O(n)
const levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  // regular bfs
  while (queue.length) {
    // 2. Initialize subarray
    const currentLevelValues = [];
    let length = queue.length;
    let count = 0;

    // 1. Identify level in the tree
    // while level by level
    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      // counting children and by this as well levels
      count++;
    }

    // 3. Push finished subarray into result
    result.push(currentLevelValues);
  }

  return result;
};

console.log(levelOrder(tree));
