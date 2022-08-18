/*
    Question when You are solving BT problems:

    - Do I need to traverse the tree? 99% yes
        Because we need to find the longest branch

    - What type of search type we will have to find?
        + Breadth first search: searching element is closer to the root element
        + Depth First Search - is going to thorough explore single path down.
                                so its priority is to go deep. 
                                The node what we want is on the bottom

    - What type of traverse type we want to use?
        Order in which it store the data touched by search
        It is important if we take care for the values stored in the BT

        + Pre-order

        + In-order

        + Post-order



    DFS - Recursive in nature, so You need to think about nature of this recursive solution.
            In nature of it important is to consider base cases (can be one or many)



            pseudo-code

            function recursive (node, count ) {
                // base case 1
                if (node === null) {
                    return count
                }
                count++

                // base case 2
                return (max(recursive(nodeLeft, count),
                            recursive(nodeRight, count)))

            }

*/
const { TreeNode } = require("../binaryTree");
const root = new TreeNode();
root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);
// in good Binary tree (perfectly balanced) Space O(log n)
// worse case Space O(n)

// Time O(n)
// Space O (1)
const maxDepth = function (node, currentDepth = 0) {
  if (!node) {
    return currentDepth;
  }

  currentDepth++;
  // calling recursion
  return Math.max(
    maxDepth(node.left, currentDepth),
    maxDepth(node.right, currentDepth)
  );
};

console.log(maxDepth(root, 0));
