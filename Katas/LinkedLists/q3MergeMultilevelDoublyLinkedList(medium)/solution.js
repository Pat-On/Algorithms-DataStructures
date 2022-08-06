const {
  ListNode,
  buildMultiLevel,
  printListMulti,
  printList,
} = require("./helpersMethods");

// --------- Our solution -----------

// time  0(n) - because it is not touching everything
// space O(1)

var flatten = function (head) {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      // node has a child
      let tail = currentNode.child;

      // only when there is next node
      while (tail.next !== null) {
        tail = tail.next;
      }

      // like "tailoring"
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      // reconnecting
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];
let multiLinkedList = buildMultiLevel(nodes);

printListMulti(multiLinkedList);
console.log("after flatten");
printList(flatten(multiLinkedList));
