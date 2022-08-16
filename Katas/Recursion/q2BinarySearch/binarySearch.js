const arr = [1, 2, 3, 4, 5, 6, 7];

// important question - what to return
// T: O(log n)
// S: O(1)
const binarySearch = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else if (foundVal > target) {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch(arr, 7));
