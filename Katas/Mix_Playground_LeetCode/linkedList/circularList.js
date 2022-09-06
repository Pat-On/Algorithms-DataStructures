const { LinkedList, Node } = require("./linkedList");

function circular(list) {
  let fast = list.head;
  let slow = list.head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

const l = new LinkedList();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

l.head = a;
a.next = b;
b.next = c;
c.next = b;

console.log(circular(l));

const z = new LinkedList();
z.insertLast("a");
z.insertLast("b");
z.insertLast("c");
console.log(circular(z)); // returns { data: 'b' }
