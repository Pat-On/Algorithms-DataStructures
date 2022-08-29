/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 <= r < N, 0 <= c < N, k === 0
probability(r, c, k) = 1

0 <= r < N, 0 <= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0

 */

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

// T: O(8^k)
// S: O(8^k)
const knightProbability = function (N, K, r, c) {
  // base case and edge case
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }

  // no more moves
  if (K === 0) {
    return 1;
  }

  let res = 0;

  // 8 different directions
  for (let dir of DIRECTIONS) {
    res += knightProbability(N, K - 1, r + dir[0], c + dir[1]) / 8;
  }

  return res;
};

console.log(knightProbability(6, 2, 2, 2));
