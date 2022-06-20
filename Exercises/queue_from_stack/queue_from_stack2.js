const breaker = require("../breaker_line")();
const Stack = require("../stack/stack");

breaker();

/*
        Exercise
    Implement a Queue datastructure using two stacks.
    Do not create an array inside of the "Queue" class
    Queue should implement the methods: 'add'. 'remove', and 'peek'
    
        Examples
        const q = new Queue()
        q.add(1)
        q.add(2)
        q.peek()
        q.remove()
        q.remove()

*/

class Queue {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }
  add(item) {
    this.stackIn.push(item);
  }
  remove() {
    if (this.stackOut.peek()) {
      return this.stackOut.pop();
    }

    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
  }
  peek() {
    if (this.stackOut.peek()) {
      return this.stackOut.peek();
    }

    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.peek();
  }
}

const crazySlowQueue = new Queue();

crazySlowQueue.add(1);
crazySlowQueue.add(2);
crazySlowQueue.add(3);
crazySlowQueue.add(4);
crazySlowQueue.add(5);

console.log(crazySlowQueue.peek());

crazySlowQueue.add(6);
crazySlowQueue.add(7);

console.log(crazySlowQueue.peek());
crazySlowQueue.add(7);
console.log(crazySlowQueue.remove());
crazySlowQueue.add(8);

console.log(crazySlowQueue.peek());
