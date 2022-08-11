class Queue {
  constructor() {
    this.stack = [];
    this.lastOperation = "";
  }

  _reverse() {
    const reversed = [];
    for (let i = this.stack.length - 1; i >= 0; i--) {
      reversed.push(this.stack[i]);
    }
    this.stack = reversed;
  }

  enqueue(item) {
    if (!(this.lastOperation === "enqueue")) {
      this._reverse();
      this.lastOperation = "enqueue";
    }
    this.stack.push(item);
  }

  dequeue() {
    if (!(this.lastOperation === "dequeue")) {
      this._reverse();
      this.lastOperation = "dequeue";
    }
    return this.stack.pop();
  }

  peek() {
    if (!(this.lastOperation === "dequeue")) {
      this._reverse();
      this.lastOperation = "dequeue";
    }
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length ? false : true;
  }
}

const queue = new Queue();
console.log(queue);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("peek", queue.peek());
console.log("1", queue.dequeue());
console.log(queue);

console.log("2", queue.dequeue());
console.log(queue);

queue.enqueue(4);
console.log(queue);
console.log("3", queue.dequeue());
console.log(queue);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log("4", queue.dequeue());
console.log(queue);

console.log("5", queue.dequeue());
console.log(queue);
console.log("peek", queue.peek());
console.log("empty?", queue.empty());

queue.enqueue(8);
console.log(queue);
console.log("6", queue.dequeue());
console.log("7", queue.dequeue());
console.log("8", queue.dequeue());

console.log("empty?", queue.empty());
