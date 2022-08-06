/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

let curr = linkedList;
let cycleNode;

while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------

// time O(n) - two pointers but one iteration
// space O(1)

const findCycle = function (head) {
  if (!head) return null;

  let tortoise = head;
  let hare = head;

  while (true) {
    // moving all animals one step
    tortoise = tortoise.next;
    hare = hare.next;

    // if no cycle - edge case
    if (hare === null || hare.next === null) {
      return null;
    } else {
      // additional jump
      hare = hare.next;
    }
    // tortoise and hare met - overlapping
    if (tortoise === hare) break;
  }

  let p1 = head;
  let p2 = tortoise;

  // finding starting point of cycle
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};

console.log(findCycle(linkedList));
