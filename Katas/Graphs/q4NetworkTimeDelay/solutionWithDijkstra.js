// Priority Queue implementation <--- from previous lesson
class PriorityQueue {
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

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

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

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const t = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
// T: O(E * log N + N * log N)
const networkDelayTime = function (times, N, k) {
  // distances - array related to the dijkstra algo
  const distances = new Array(N).fill(Infinity); // T: O(n)
  const adjList = distances.map(() => []); // T: O(n)

  //   we are deducting 1 because indexes are starting on 0
  distances[k - 1] = 0;

  // putting all elements to heap
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1); // we are storing indexes in the heap

  // loops around all edges so T; O(E)
  for (let i = 0; i < times.length; i++) {
    // S: O(e) <=== You can remove it and utilize it
    // clean code
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    // at index push [target, weight]
    adjList[source - 1].push([target - 1, weight]);
  }

  // iterating base on heap
  while (!heap.isEmpty()) {
    // smallest weight from heap
    const currentVertex = heap.pop();

    // array of our neighbors
    const adjacent = adjList[currentVertex];

    // checking the neighbors of current vertex
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];

      //changing value when the distance is smaller
      // so we are checking if we reached the node before and what was the cost of getting to it.
      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        // pushing the value to the heap
        heap.push(neighboringVertex);
      }
    }
  }

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1));
