// https://leetcode.com/problems/implement-queue-using-stacks/description/

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    // reversing order to prepare array to use push - add element at the end of an array
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    // reversin order to prepare array to use pop - removes element at the end of an array
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
console.log(myQueue.peek());
myQueue.enqueue("Joy");
// console.log("first", myQueue.first);
// console.log("last", myQueue.last);

// after enqueue
console.log("*".repeat(20), "after enqueue");
myQueue.enqueue("Matt");
console.log("first", myQueue.first);
console.log("last", myQueue.last);
myQueue.enqueue("Pavel");

// after dequeue
myQueue.dequeue();
console.log("*".repeat(20), "after dequeue");
console.log("first", myQueue.first);
console.log("last", myQueue.last);

console.log(myQueue.peek());
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());

console.log("first", myQueue.first);
console.log("last", myQueue.last);
