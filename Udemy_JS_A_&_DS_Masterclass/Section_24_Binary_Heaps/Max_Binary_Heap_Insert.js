// Binary Heap base on the array - intersting concept

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // this is like some kind of the sort - in our case top value going to root and other follow the value
  // base on the comparision - after that entire tree is again  binary heap - in relation to parents
  // https://visualgo.net/en/heap?slide=1
  bubbleUp() {
    // last element because we are using push
    let idx = this.values.length - 1;
    // reference to element in array
    const element = this.values[idx];

    // sorting
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // equal or less than parent as a guard statement
      if (element <= parent) break;

      // swap = all is about swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;

      // comparing kids to parents so we need to change element
      idx = parentIdx;
    }
  }

  printMe() {
    console.log(this.values);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.printMe();
