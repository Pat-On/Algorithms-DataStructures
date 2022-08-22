// const adjacencyList = [
//   [1, 3],
//   [0],
//   [3, 8],
//   [0, 2, 4, 5],
//   [3, 6],
//   [3],
//   [4, 7],
//   [6],
//   [2],
// ];

// prettier-ignore
const adjacencyList = [
    [1, 3],           // 0                          <--- something is wrong with it in BFS arg! (output)
    [0],              // 1
    [3, 8],           // 2
    [0, 2, 4, 5],     // 3
    [3, 6],           // 4
    [3, 7],           // cycle between 5
    [4, 7],           // 6
    [6, 5],           // and 7
    [2],              // 8
  ];

const traversalDFS = function (vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if (!seen[connection]) {
      traversalDFS(connection, graph, values, seen);
    }
  }
};

const values = [];
traversalDFS(0, adjacencyList, values, {});

console.log(values);
