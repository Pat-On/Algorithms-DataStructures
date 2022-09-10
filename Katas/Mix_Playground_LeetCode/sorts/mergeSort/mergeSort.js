function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const halfLength = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, halfLength));
  const right = mergeSort(arr.slice(halfLength));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(right).concat(left);
}

console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
