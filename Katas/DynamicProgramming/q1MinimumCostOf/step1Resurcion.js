/*

1st step in Dynamic Programing


Recurrence relation: <---- the toughest part

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];


T: O(2^n)
S: O(n)

// top down approach
*/

const longArray = require("./crazyBigArray");

const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

const minCost = function (i, cost) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
};

console.log(minCostClimbingStairs([20, 15, 30, 5]));

// uff it is taking eternity!
// console.log(minCostClimbingStairs(longArray));
