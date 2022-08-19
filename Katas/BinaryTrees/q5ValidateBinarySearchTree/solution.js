const { TreeNode } = require("../binaryTree");
const tree = new TreeNode(10);
tree.insert([9, 11]);
console.log(tree);
// ------- SOLUTION
//                              O
//                            /   \
//                         O         O
//                       /   \      /   \               12
//                     O      O     O    O
//                  /    \   / \   / \   /  \
//                  O    O  O   O O   n n    n

const dfs = function (node, min, max) {
  // guard statement
  if (node.value <= min || node.value >= max) {
    return false;
  }

  if (node.left) {
    // because function return true and false
    if (!dfs(node.left, min, node.value)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.value, max)) {
      return false;
    }
  }

  return true;
};
// Time:  O(n) - because of the worse case
// Space: O(n) - because of recursion
const isValidBST = function (root) {
  if (!root) return true;
  // recursion call
  return dfs(root, -Infinity, Infinity);
};

console.log(isValidBST(tree));
