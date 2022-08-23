const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

// better to follow because you can easier track all variables and values

// time:    O(P + n2)
// space:   O(n2)
/*
    Topological Sort:
        - to check if the graph is cyclic 
        - directed cyclic graph

*/

const canFinishWithAdj = function (n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);

  // building both lists: inDegree adjList
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }

  const stack = []; // stack - because is the most efficient - no re-indexing

  // pushing all current inDegree values === 0
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  //
  while (stack.length) {
    const current = stack.pop();
    count++;

    const adjacent = adjList[current];

    // main difference between solution
    for (let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      // populating stack
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  // count has to be equal to n, because if there are no cycles we would go though all nodes
  return count === n;
};

console.log(canFinishWithAdj(6, p));
