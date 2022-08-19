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

// recursion - we can pass the context of immediate parents to their direct children <- nature of recursion in one sentence
// solution to track the levels in binary tree

// How to find the most right node from each level?
// base of comparison between length of result array and the levels
// why it work? Because we are always going to the right firstly

// time: O(n)
// space: O(n) - in worse case - depends on the type of tree that we can get
// space: O(h) high of the tree
const dfs = (node, currentLevel, result) => {
  // base case
  if (!node) return;

  // condition when we want to push the value to results
  if (currentLevel >= result.length) {
    result.push(node.value);
  }

  // recursion - DFS from right to left (changed order)
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
};

const rightSideViewDFS = function (root) {
  // we use that arrays' feature, by passing it reference to recursion
  const result = [];

  dfs(root, 0, result);
  return result;
};

console.log(rightSideViewDFS(tree));
