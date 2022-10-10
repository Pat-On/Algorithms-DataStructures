// https://leetcode.com/problems/trapping-rain-water/

var trap = function (height) {
  let total = 0;
  let maxL = 0;
  let maxR = 0;
  for (let i = 0; i < height.length; i++) {
    // pointer to left
    for (let toLeft = i; toLeft >= 0; toLeft--) {
      if (height[toLeft] > maxL) {
        maxL = height[toLeft];
      }
    }
    // pointer to right
    for (let toRight = i; toRight < height.length; toRight++) {
      if (height[toRight] > maxR) {
        maxR = height[toRight];
      }
    }
    // formula
    let currentWater = Math.min(maxL, maxR) - height[i];
    // console.log(currentWater);
    if (currentWater >= 0) {
      total = total + currentWater;
    }

    // resetting variables
    maxL = 0;
    maxR = 0;
  }
  return total;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height)); // 9

const height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height2)); // 6
