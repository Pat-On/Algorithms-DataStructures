const breaker = require("../../breaker_line")();
const { LinkedList } = require("../index");

/* 
return the middle node of a linked list.
If the list has an even number of elements, return 
the node at the end of the first half of the list.
Do not use a counter variable, do not retrieve 
the size of the list and only iterate through the list one time

-- Example
const l = LinkedList()
l.insertLast("a")
l.insertLast("b")
l.insertLast("c")

midpoint(l) // returns {data: 'b'}

*/

function midpoints(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

breaker();

const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

console.log(midpoints(list));

breaker();
list.insertLast(4);

console.log(midpoints(list));
