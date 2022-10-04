// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const lookupValue = target - nums[i];
    if (numObj[lookupValue] && i !== numObj[lookupValue]) {
      return [i, numObj[lookupValue]];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
