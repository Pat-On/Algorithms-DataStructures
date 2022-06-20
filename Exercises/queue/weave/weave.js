const breaker = require("../../breaker_line")();

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    return this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    // if (this.data[this.data.length - 1]) {
    //   return this.data[this.data.length - 1];
    // }
    // return undefined;

    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const newQueue = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    // First idea
    // if (sourceOne.peek() && sourceTwo.peek()) {
    //   newQueue.add(sourceOne.remove());
    //   newQueue.add(sourceTwo.remove());
    // } else if (sourceOne.peek()) {
    //   newQueue.add(sourceOne.remove());
    // } else if (sourceTwo.peek()) {
    //   newQueue.add(sourceTwo.remove());
    // }

    // SHORTER!
    if (sourceOne.peek()) {
      newQueue.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      newQueue.add(sourceTwo.remove());
    }
  }
  return newQueue;
}

breaker();

const q = new Queue();
console.log(q.add(1));
console.log(q.add(2));
console.log(q.add(3));
console.log(q.add(4));
console.log(q.add(5));
console.log(q.add(6));

const q2 = new Queue();
console.log(q2.add(3));
console.log(q2.add(2));
console.log(q2.add(1));

const weaveQueue = weave(q, q2);
console.log(weaveQueue.data);
