// https://leetcode.com/problems/container-with-most-water/

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let amount = 0;

  // let leftToReturn = left
  // let rightToReturn = right

  while (left < right) {
    let amountToCompare = 0;

    if (height[left] <= height[right]) {
      amountToCompare = height[left] * (right - left);
    } else {
      amountToCompare = height[right] * (right - left);
    }

    // console.log(left, right)
    if (amountToCompare > amount) {
      // leftToReturn = left
      // rightToReturn = right
      amount = amountToCompare;
    }
    // smaller left/right height * rightIdx - leftIdx

    // move indexes
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  // console.log(leftToReturn, rightToReturn)
  // return the amount of water
  return amount;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
