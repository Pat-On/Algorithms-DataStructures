// T: O(n)
// S: O(1)  <---- WOW!
// top down approach

const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < n; i++) {
    // it is possible because algorithm is tracking two values
    // and use to base calculation
    // - like climbing!
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
};

console.log(minCostClimbingStairs([20, 15]));
