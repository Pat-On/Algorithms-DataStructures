class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    // here should be validation :> "To be validated or not to be validated? :->"
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);

    // directed graph -> add just to one side!
    // this.adjacencyList[v1].push(v2);
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

g.addEdge("Dallas", "Tokyo");

// brutal! :>
console.log(g.adjacencyList["Tokyo"]);
console.log(g.adjacencyList["Dallas"]);
