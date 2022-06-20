const breaker = require("../breaker_line")();

breaker();

class Queue {
  constructor() {
    this.queue = [];
  }

  add(element) {
    return this.queue.unshift(element);
  }

  remove() {
    return this.queue.pop();
  }
}

const q = new Queue();
console.log(q.add(1));
console.log(q.add(2));
console.log(q.add(3));

console.log(q.remove());
console.log(q.queue);
