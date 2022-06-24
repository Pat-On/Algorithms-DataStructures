const breaker = require("../../breaker_line")();
const { LinkedList } = require("../index");

/*
--- Directions
Given a linked list and integer n, return the element n
spaces from the last node in the list. Do not call the 
"size" method of the linked list. 

Assume that n will always be less than the length of the list

--- Examples

const list = new List()
list.insertLast("a")
list.insertLast("b")
list.insertLast("c")
list.insertLast("d")

fromLast(list, 2).data // b

*/

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

breaker();
const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.insertLast(10);

console.log(fromLast(list, 5));
