const { LinkedList } = require("./linkedList");

function midpoint(list) {
  let nextSlow = list.head;
  let nextFast = list.head;
  while (nextFast.next && nextFast.next.next) {
    nextSlow = nextSlow.next;
    nextFast = nextFast.next.next;
  }

  return nextSlow;
}

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
console.log(midpoint(l)); // returns { data: 'b' }

l.insertLast("d");
console.log(midpoint(l));
