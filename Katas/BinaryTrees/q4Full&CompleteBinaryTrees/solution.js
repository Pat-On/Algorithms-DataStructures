const { TreeNode } = require("../binaryTree");

const tree = new TreeNode(3);
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);
// ------- SOLUTION
//                              O
//                            /   \
//                         O         O
//                       /   \      /   \               12
//                     O      O     O    O
//                  /    \   / \   / \   /  \
//                  O    O  O   O O   n n    n

// going to bottom of the tree on the left side
const getTreeHeight = function (root) {
  let height = 0;
  while (root.left !== null) {
    height++;
    root = root.left;
  }

  return height;
};

// ------------------------- The most interesting part! -----------------------------------
// modified binary search?
const nodeExists = function (idxToFind, height, node) {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;

  // while control how many level deep we are going in
  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    // to the right side
    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }

    count++;
  }

  return node !== null;
};
// ----------------------------------------------------------------------------------------

// as a whole function T: O(h2 + h) -> we are dropping one h so: O(h^2)  -> T: O(log n * log n) -> so it is log^2 n

// space: O(1)

const countNodes = function (root) {
  // no tree case
  if (!root) return 0;

  const height = getTreeHeight(root); // Time: O(h) h - hight of tree |in our case O(log n)

  // if there is only root, then size is zero and we have only one node - no need to execute code bellow
  if (height === 0) return 1;

  // so everything above the last level
  const upperCount = Math.pow(2, height) - 1; // O(1)

  // indexes used in modified binary search
  let left = 0;
  let right = upperCount;

  // O(log n/2) -> we are dropping the constant so O(log n) -> so again O(h)
  while (left < right) {
    // middle point - index to find
    const idxToFind = Math.ceil((left + right) / 2);

    // check if the node exist
    // again O(h)
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 1;
};

console.log(countNodes(tree));
