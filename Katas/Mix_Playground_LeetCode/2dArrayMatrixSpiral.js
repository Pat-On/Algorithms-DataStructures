function matrix(n) {
  const matrixArray = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(undefined));

  // variables definitions
  let startX = 0;
  let endX = matrixArray[0].length - 1;
  let startY = 0;
  let endY = matrixArray.length - 1;
  let count = 1;

  // this solution work only for the arrays n x n in size
  while (endX >= startX && endY >= startY) {
    // to right
    for (let i = startX; i <= endX; i++) {
      matrixArray[startY][i] = count;
      count++;
    }
    startY++;

    // to down
    for (let i = startY; i <= endY; i++) {
      matrixArray[i][endX] = count;
      count++;
    }
    endX--;

    // // to left
    for (let i = endX; i >= startX; i--) {
      matrixArray[endY][i] = count;
      count++;
    }
    endY--;

    //to top
    for (let i = endY; i >= startY; i--) {
      matrixArray[i][startX] = count;
      count++;
    }
    startX++;
    // break;
  }

  return matrixArray;
}

// constraints
// end of the array
// value in the array
console.log(matrix(2));

//     [[undefined, undefined],
//      [undefined, undefined]]

console.log(matrix(3));
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]

console.log(matrix(4));
//     [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6],
//      [10,  9,  8, 7]]
