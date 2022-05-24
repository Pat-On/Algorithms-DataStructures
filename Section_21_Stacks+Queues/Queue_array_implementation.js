// There is more than one way of implementing a queue
// FIFO - First In, First out

class Queue {
  constructor() {
    this.queue = [];
  }

  // horrible solution because require re-indexing
  queuePush(val) {
    return this.queue.push(val);
  }

  queueShift() {
    return this.queue.shift();
  }
  display() {
    console.log(this.queue);
  }

  // other way around - reindexing on adding values to array
  queueUnshift(val) {
    return this.queue.unshift(val);
  }

  queuePop() {
    return this.queue.pop();
  }

  clearQueue() {
    this.queue = [];
  }
}

const newArrayQueue = new Queue();

newArrayQueue.queuePush("one");
newArrayQueue.queuePush("two");
newArrayQueue.queuePush("three");
newArrayQueue.queuePush("four");

newArrayQueue.display();
console.log(newArrayQueue.queueShift());
newArrayQueue.display();

newArrayQueue.clearQueue();

newArrayQueue.queueUnshift("one");
newArrayQueue.queueUnshift("two");
newArrayQueue.queueUnshift("three");
newArrayQueue.queueUnshift("four");
newArrayQueue.display();
console.log(newArrayQueue.queuePop());
newArrayQueue.display();
