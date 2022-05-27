class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    // meaning of this is changing in JS <- easy to forget ^^
    const adjacencyList = this.adjacencyList;

    // An IIFE (Immediately Invoked Function Expression) <- name promoted by Ben Alman
    (function dfs(vertex) {
      // if empty
      if (!vertex) return null;

      // tracking visited
      visited[vertex] = true;

      // save results
      result.push(vertex);

      // here we have problem (this.adjacencyList[vertex]) is undefined <- JavaScript and this scope <- solution:  const adjacencyList = this.adjacencyList
      // here it would "go back" and check other neighbours - got it! nice!
      adjacencyList[vertex].forEach((neighbor) => {
        // checking if was visited
        if (!visited[neighbor]) {
          // call recursion
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.depthFirstRecursive("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
