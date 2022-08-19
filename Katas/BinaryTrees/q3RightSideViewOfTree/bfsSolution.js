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

const rightSideViewBFS = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;
    let currentNode;

    while (count < length) {
      currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentNode.value);
  }

  return result;
};

console.log(rightSideViewBFS(tree));
