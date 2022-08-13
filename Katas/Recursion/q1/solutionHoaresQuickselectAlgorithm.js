const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i - 1;
};

// It is modified quickSort function.
// const quickSort = function (nums, left, right) {
//   if (left < right) {
//     const partitionIndex = getPartition(nums, left, right);

//     quickSort(nums, left, partitionIndex - 1);
//     quickSort(nums, partitionIndex + 1, right);
//   }
// };
const quickSelect = function (nums, left, right, indexToFind) {
  const partitionIndex = getPartition(nums, left, right);

  // found!
  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
    // indexToFind is less - go to left
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind); // <--- recursion
    // indexToFind is more - go to right
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind); // <--- recursion
  }
};

// note: in best case scenario we can eliminate half of the length of array n + n/2 + n/4 + n/8...
// time complexity O(n)
// in worse case
// [6, 5, 4, 3, 2, 1] descending order where we want to have it in ascending order
// [6, 5, 4, 3, 2, 1]
//                 _    <-- pivot
// [1, 5, 4, 3, 2, 6]
// [ 5, 4, 3, 2, 6]
//               _    <--- pivot
// [1, 2, 4, 3, 5, 6]
// then
// [2, 3, 4, 5] etc etc

// summary: we are scanning entire array so the worse time complexity is O(n2) <---- worse case

//space complexity - O(1)
// there is tail recursion so  - O(1) <-- interesting
var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

console.log(findKthLargest(array, kToFind));
