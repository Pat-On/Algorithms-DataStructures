const t = [
  [1, 4, 2],
  [1, 2, 9],
  [4, 2, -4],
  [2, 5, -3],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];

// Constraint:
// Bellman-Ford Algorithm does not work when there is negative cycle!

// time O(n*e) (e-edges)
// S: O(n)
const networkDelayTime = function (times, N, k) {
  // setting nodes with the "distance" of Infinitive value
  const distances = new Array(N).fill(Infinity);

  // starting node
  distances[k - 1] = 0;

  // N - 1 (part of the implementation of the Bellman-ford)
  for (let i = 0; i < N - 1; i++) {
    // change controller - no change, then break
    let count = 0;

    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];

      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }

    if (count === 0) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1));
