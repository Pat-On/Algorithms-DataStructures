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
// 4. Choose most right values and return

const rightSidePerspectiveBFS = function (root) {
  // null case
  if (!root) return [];

  const result = [];
  const queue = [root];

  // BFS
  while (queue.length) {
    // 2. Initialize subarray
    const currentLevelValues = [];
    let length = queue.length;
    let count = 0;

    // 1. Identify level in the tree
    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // counting levels of the Tree
      count++;
    }

    result.push(currentLevelValues);
  }

  // 4. Choose most right values and return
  const toReturn = [];
  result.forEach((item) => toReturn.push(item[item.length - 1]));
  return toReturn;
};

console.log(rightSidePerspectiveBFS(tree));
