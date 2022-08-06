/*

    Example of Cycle:
            x - x
          /      \
    x - x         x
          \      /
            x - x


    how to recognize that we have cycle
    how to find the node that started the cycle


    - naive solution:
        keep track of all nodes and check if we already were there
*/

// naive

// time O(n)
// space O(n)
const findCycle = function (head) {
  let currentNode = head;
  const seenNodes = new Set();

  // check if node was already seen
  while (!seenNodes.has(currentNode)) {
    // check if there is no cycle
    if (currentNode.next === null) {
      return false;
    }

    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
};
