// time O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // minus one because the highest value is already on the top!
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
