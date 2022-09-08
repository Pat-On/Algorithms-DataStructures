function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        console.log(arr[j], arr[indexOfMin]);
        indexOfMin = j;
      }
    }
    // console.log(arr[i], arr[indexOfMin]);
    if (i !== indexOfMin) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
    // console.log(arr);
  }
  return arr;
}

console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));
