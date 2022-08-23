const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];
// very slow solution
// time  O(P + n3)
// space O (n2)
const canFinish = function (n, prerequisites) {
  // creating array
  const adjList = new Array(n).fill(0).map(() => []);

  // populating adjacent list
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    // adjacent list at index - push reference to other node - dependencies
    adjList[pair[1]].push(pair[0]);
  }

  // going through all nodes / vertexes
  for (let v = 0; v < n; v++) {
    // we need new queue because we are going to check each node
    const queue = [];
    const seen = {};
    // iterating through dependencies
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      // v is our starting vertex so if we are going to hit it, it means we have a cycle
      if (current === v) {
        return false;
      }
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

console.log(canFinish(6, p));
