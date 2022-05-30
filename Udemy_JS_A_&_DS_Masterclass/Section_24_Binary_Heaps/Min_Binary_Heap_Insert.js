class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // the only difference between max and min
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  printMe() {
    console.log(this.values);
  }

  extractMin() {
    // my max values
    const min = this.values[0];
    // pop value from array
    const end = this.values.pop();

    // EDGE CASE - empty heap
    if (this.values.length > 0) {
      // we need to fix order now
      this.values[0] = end;

      // trickle down tree

      this.sinkDown();
    }

    return min;
  }
  // [33, 39, 41, 18, 27, 12]
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    // it will be the number which we want to position
    const element = this.values[0];

    // MAIN LOGIC
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      // let rightChild = this.values[rightChildIdx] <-- You can not do that like this because it is no 100% sure there is going to be any child (out of bounds)

      let leftChild, rightChild;
      let swap = null;

      // left child
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      // right child
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        // we want to compare the child elements too and swap. If two numbers are smaller then we are choosing smaler
        // we are making sure that we are swaping exactl child
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      // guard - if the compared parent was smaller than child (2 * idx + 1) and (2 * idx + 2)
      if (swap === null) break;

      // swap base on indexes
      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      // update the index
      // index is not just +1 because index is calculkated base on formula:
      idx = swap;
    }
  }
}

let heap = new MinBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.printMe();
console.log(heap.extractMin());

heap.printMe();

console.log(heap.extractMin());

heap.printMe();
