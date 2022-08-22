// "use strict";

// adjacency list with cycle
// prettier-ignore
const adjacencyList = [
  [1, 3],           // 0                          <--- something is wrong with it (output)
  [0],              // 1                            why we have two 7s?
  [3, 8],           // 2                             [ 
  [0, 2, 4, 5],     // 3                               0, 1, 3, 2, 4,   
  [3, 6],           // 4                               5, 8, 6, 7, 7       
  [3, 7],           // cycle between 5               ]       
  [4, 7],           // 6                                    
  [6, 5],           // and 7
  [2],              // 8
];

const traversalBFS = function (graph) {
  // to not get lost in circle
  const seen = {};
  const queue = [0];
  const values = [];

  // iterating based on queue
  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    // why it does not set up seen[7] true in first go??
    seen[vertex] = true;
    if (vertex === 7) {
      console.log("Why?", seen[vertex], vertex);
    }
    // getting dependencies
    const connections = graph[vertex];
    // iterating around dependencies / connections
    // console.log(seen);
    // console.log(values);
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        console.log(seen[connection]);
        if (connection === 7) {
          console.log("Why?", connection, seen[connection]);
          console.log("Seen", seen);
        }
        queue.push(connection);
      }
    }
  }

  return values;
};

console.log(traversalBFS(adjacencyList));
