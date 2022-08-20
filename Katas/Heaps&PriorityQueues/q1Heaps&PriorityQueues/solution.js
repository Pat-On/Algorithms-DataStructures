// size <- array length
// isEmpty <- array length
// peek <- array[0]
// push
// pop

class PriorityQueue {
  // default - max heap
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }
  // -------------------------- Math to make it works
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }
  // -------------------------------------------------
  _swap(i, j) {
    // const temp = this._heap[i];
    // this._heap[i] = this._heap[j];
    // this._heap[j] = temp;
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  // --------------------------------------------------------------
  /*
            15
        /       \
        10      5
    /       \
    7       3

    [15, 10, 5, 7, 3, 20]

*/
  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }
  // -------------------------------------------------------------- "deletion"
  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  // we passing nothing because of assumption that value is at the end of the array
  _siftDown() {
    let nodeIdx = 0;

    while (
      // prettier-ignore
      (this._leftChild(nodeIdx) < this.size() && this._compare(this._leftChild(nodeIdx), nodeIdx)) // left comparison
        ||
      (this._rightChild(nodeIdx) < this.size() && this._compare(this._rightChild(nodeIdx), nodeIdx)) // right comparison
    ) {
      // prettier-ignore
      // finding greater child index
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() && this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx) : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while (!pq.isEmpty()) {
  console.log(pq.pop());
}
