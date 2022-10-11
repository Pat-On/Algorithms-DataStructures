// https://leetcode.com/problems/trapping-rain-water/

// two pointers solution
var trap = function (height) {
  let totalWaterAmount = 0;
  let highestLeft = 0;
  let highestRight = 0;

  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer !== rightPointer && leftPointer < rightPointer) {
    let currentWater;
    // movement
    // Left Logic
    if (height[leftPointer] < height[rightPointer]) {
      if (highestLeft < height[leftPointer]) {
        highestLeft = height[leftPointer];
      }
      currentWater = highestLeft - height[leftPointer];

      leftPointer++;
    } else {
      // right logic
      if (highestRight < height[rightPointer]) {
        highestRight = height[rightPointer];
      }

      currentWater = highestRight - height[rightPointer];

      rightPointer--;
    }

    // updating values
    if (currentWater > 0) {
      totalWaterAmount = totalWaterAmount + currentWater;
    }
  }

  return totalWaterAmount;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height)); // 9

const height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height2)); // 6
