/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrixArray) {
  // variables definitions
  let startX = 0;
  let endX = matrixArray[0].length - 1;
  let startY = 0;
  let endY = matrixArray.length - 1;

  const size = matrixArray.length * matrixArray[0].length;
  let retrieved = 0;
  const returnArr = [];

  while (size > retrieved) {
    // to right
    for (let i = startX; i <= endX && retrieved < size; i++) {
      returnArr.push(matrixArray[startY][i]);
      retrieved++;
    }
    startY++;

    // to down
    for (let i = startY; i <= endY && retrieved < size; i++) {
      returnArr.push(matrixArray[i][endX]);
      retrieved++;
    }
    endX--;

    // // to left
    for (let i = endX; i >= startX && retrieved < size; i--) {
      returnArr.push(matrixArray[endY][i]);
      retrieved++;
    }
    endY--;

    //to top
    for (let i = endY; i >= startY && retrieved < size; i--) {
      returnArr.push(matrixArray[i][startX]);
      retrieved++;
    }
    startX++;

    console.log(returnArr);
  }

  return returnArr;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// [1,2,3,4,8,12,11,10,9,5,6,7]
