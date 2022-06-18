const breaker = require("../breaker_line")();

breaker();

/*

            HARD ONE! 

matrix(2)

[[1,2],
[4,3]]

matrix(3)

[[1, 2, 3]
[8, 9, 4],
[7, 6, 5,]]

*/

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // value pushed to array
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // magic here!

    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }

    endColumn--;

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  return results;
}

console.log(matrix(2));
console.log(matrix(5));
breaker();

function matrixRec(n, tail = 0) {
  if (n === 1) return [[tail + 1]];
  if (n === 2)
    return [
      [tail + 1, tail + 2],
      [tail + 4, tail + 3],
    ];

  /*   
              a  a  a  a  a  b
      tail -> d  *  *  *  *  b
              d  * matrix *  b
              d  * (n-2)  *  b
              d  *  *  *  *  b
              d  c  c  c  c  c
      */

  return [
    // top Array
    [...Array(n)].map((v, index) => tail + 1 + index),
    // mid Arrays
    ...matrixRec(n - 2, tail + 4 * (n - 1)).map((r, index) => [
      tail + 4 * (n - 1) - index,
      ...r,
      tail + n + 1 + index,
    ]),
    // bottom Array
    [...Array(n)].map((v, index) => tail + 3 * (n - 1) + 1 - index),
  ];
}

console.log(matrixRec(2));
console.log(matrixRec(5));

function matrixWalk(n) {
  let x = 0,
    y = 0;
  let xMax = n - 1,
    yMax = n - 1;
  let xMin = 0,
    yMin = 0;
  let direction = "right";
  let spiral = [];
  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }
  for (let k = 1; k <= n * n; k++) {
    spiral[y][x] = k;
    switch (direction) {
      case "right":
        x++;
        if (x === xMax) {
          direction = "down";
          yMin = y + 1;
        }
        break;
      case "down":
        y++;
        if (y === yMax) {
          direction = "left";
          xMax = x - 1;
        }
        break;
      case "left":
        x--;
        if (x === xMin) {
          direction = "up";
          yMax = y - 1;
        }
        break;
      case "up":
        y--;
        if (y === yMin) {
          direction = "right";
          xMin = x + 1;
        }
        break;
    }
  }
  return spiral;
}

console.log(matrixWalk(2));
console.log(matrixWalk(5));

// more like circles
function matrixCircle(n) {
  const result = [];
  let row = 0;
  let column = 0;
  let counter = 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  // loop n*n so O(n^2)
  for (let i = 1; i <= n * n; i++) {
    result[row][column] = i;

    if (row === counter - 1 && column < n - counter) column++;
    else if (column === n - counter && row < n - counter) row++;
    else if (row === n - counter && column > counter - 1) column--;
    else if (column === counter - 1 && row > counter) {
      row--;
      if (row === counter) counter++;
    }
  }

  return result;
}

console.log(matrixCircle(2));
console.log(matrixCircle(5));
