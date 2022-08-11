class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out[this.out.length - 1];
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

const queue = new QueueWithStacks();
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
