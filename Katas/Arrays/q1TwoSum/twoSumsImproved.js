/*
            0, 1, 2, 3, 4
    nums = [1, 3, 7, 9, 2]  t = 11

        { numberToFind: index }
*/

const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSum = function (nums, target) {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p]; // setting new number to find
      numsMap[numberToFind] = p; // adding to object
    }
  }

  return null;
};

console.log(findTwoSum(numsArray, targetToFind));
