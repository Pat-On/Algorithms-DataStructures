/*
    Given an array of integers sorted in ascending order, return the starting
    and ending index of a given target value in an array, i.e. [x. y]

    Your solution should run in O(log n) time
    
            looking for: 5
        [1, 3, 3, 5, 5, 5, 8, 9]
         0, 1, 2, 3, 4, 5, 6, 7

         start: 3 ending: 5


    Step 1: Verify the Constraints

        What do we return if the target is not found in the array?
            - Return -1, all values in the array are positive

    Step 2: Write out some test cases

        [1, 3, 5, 5, 5, 8, 9] t: 5
        output: [3, 5]

        [1, 2, 3, 4, 5, 6] t: 4
        output: [3, 3]

        [1, 2, 3, 4, 5] t: 9
        output [-1, -1]

        [] t: 3
        output [-1, -1]

*/

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// Space O(1)
// Time O(log n) - because of the binary search
const searchRange = function (nums, target) {
  // when nums array is empty
  if (nums.length < 1) return [-1, -1];

  const firstPos = binarySearch(nums, 0, nums.length - 1, target); // log(n)

  // no value found
  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos;
  let startPos = firstPos;
  let temp1;
  let temp2;

  // checking left side of array
  while (startPos !== -1) {
    // log + log(n/2) + log(n/4)... (so log(n))
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  // checking right side of array
  while (endPos !== -1) {
    // log + log(n/2) + log(n/4)... (so log(n))
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};

// so log n + log n + log n = 3 log n

const array = [1, 3, 3, 5, 5, 5, 8, 9];
const targetToFind = 5;

console.log(searchRange(array, targetToFind));
