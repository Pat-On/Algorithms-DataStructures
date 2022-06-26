/*
    -- Directions 

    Given the root node of a tree, return
    an array where each element is the width
    of the tree at each level

    --- Example


            0
        /   |   \
        1   2   3
        |       |
        4       5

    answer: [1, 3, 2] <-- indexes are levels
*/

// whenever and wherever I will get width question
// they are asking me about the Breadth First Traversal

function levelWidth(root) {
  // most of the kata related to trees while be based on the traversingDF or traversingBF
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0); // we are processing new width - so we have to push counter to the array
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
