const {
  ListNode,
  buildMultiLevel,
  printListMulti,
  printList,
} = require("./helpersMethods");

const innerFlatten = (head) => {
  let current = head;
  let tail;

  while (current) {
    if (current.child) {
      // recursion
      let tail = innerFlatten(current.child);
      const rightNode = current.next;
      current.next = current.child;
      current.child.prev = current;
      current.child = null;
      tail.next = rightNode;
      if (rightNode) rightNode.prev = tail;
    }
    if (current.next == null) {
      tail = current;
    }
    current = current.next;
  }

  return tail;
};

const flatten = (head) => {
  if (!head) return null;

  innerFlatten(head);

  return head;
};

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];
let multiLinkedList = buildMultiLevel(nodes);

printListMulti(multiLinkedList);
console.log("after flatten");
printList(flatten(multiLinkedList));
