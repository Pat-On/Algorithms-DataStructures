const { LinkedList } = require("../index");
const breaker = require("../../breaker_line")();
/*
Given a linked list, return true if the list
is circular, false if it is not

-- Examples

const l = new List()
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

l.head = a
a.next = b
b.next = c
c.next = b

circular(l) // true

*/

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
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

const lastNode = list.getLast();
const firstNode = list.getFirst();

lastNode.next = firstNode;
console.log(lastNode);
console.log(circular(list));

breaker();

const listNotCircular = new LinkedList();

listNotCircular.insertLast(1);
listNotCircular.insertLast(2);
listNotCircular.insertLast(3);
console.log(circular(listNotCircular));
