/*
recurrence relation:
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

r < 0 || r >= N, c < 0 || c >= N
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

// T: O( k * n2)
// S: O(n^2 *k)

const knightProbability = function (N, K, r, c) {
  // memoization
  // we are creating K numbers of arrays + 1
  const dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));
  console.log(dp);
  dp[0][r][c] = 1;

  for (let step = 1; step <= K; step++) {
    // from left to right
    for (let row = 0; row < N; row++) {
      // bottom to down
      for (let col = 0; col < N; col++) {
        // going through all direction
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const dir = DIRECTIONS[i];
          const prevRow = row + dir[0];
          const prevCol = col + dir[1];

          // validating move
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
            dp[step][row][col] =
              dp[step][row][col] + dp[step - 1][prevRow][prevCol] / 8;
          }
        }
      }
    }
  }

  // initialization of response
  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // sum of the last k array (graph)
      res += dp[K][i][j];
    }
  }
  console.log(dp);
  return res;
};

console.log(knightProbability(6, 3, 2, 2));
