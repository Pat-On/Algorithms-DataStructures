const longArray = require("./crazyBigArray");

// T: O(n)
// S: O(n)

const minCostClimbingStairs = function (cost) {
  const memoArray = []; // dynamic programing pattern
  const n = cost.length;
  return Math.min(
    minCost(n - 1, cost, memoArray),
    minCost(n - 2, cost, memoArray)
  );
};

const minCost = function (i, cost, dpArray) {
  // base cases
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  if (dpArray[i] !== undefined) return dpArray[i];

  // prettier-ignore
  dpArray[i] = cost[i] + Math.min(minCost(i - 1, cost, dpArray), minCost(i - 2, cost, dpArray));
  return dpArray[i];
};

console.log(minCostClimbingStairs([20, 15, 30, 5]));

// uff it is taking eternity!
console.log(minCostClimbingStairs(longArray));
