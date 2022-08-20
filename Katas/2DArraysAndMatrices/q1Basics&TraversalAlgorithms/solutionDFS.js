const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

// direction in which way we are going to go
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

// space: O(N)
// time: O(N)
const traversalDFS = function (matrix) {
  // the easiest way to keep track what we already explored
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  // recursive call
  dfs(matrix, 0, 0, seen, values);

  return values;
};

const dfs = function (matrix, row, col, seen, values) {
  // boundaries of the 2-D array + seen
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    console.log("Boom return!");
    return;
  }

  // tracking what we visited
  seen[row][col] = true;

  // collecting values
  values.push(matrix[row][col]);

  // ------- INTERESTING PART -------
  // calling element in recursive way in all 4 directions
  // plus increment or decrement values of rol and col <-- traversing
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    let direction;
    if (i === 0) {
      direction = "up";
    } else if (i === 1) {
      direction = "right";
    } else if (i === 2) {
      direction = "down";
    } else if (i === 3) {
      direction = "left";
    }
    console.log(currentDir, matrix[row][col], direction);
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};

// 0  1  2  3  4  (column)
// 0  | [ 1,  2,  3,  4,  5] |               6 x 6
// 1  | [ 6,  7,  8,  9, 10] |             current Row: 0 Col: 0
// 2  | [11, 12, 13, 14, 15] |
// 3  | [16, 17, 18, 19, 20] |
//    --               --

// -------------------------------- Am I understanding it?
// [1, 2, 3, 4, 5,  to right -> rec rec rec rec rec -> guard statement return
// 10, 15, 20,      to down -> rec rec rec -> guard statement return
// 19,              to left -> rec  (last call with this values - for loop mechanism)
// 14, 9,           to top  -> rec rec => guard statement return
// 8,               to left -> rec  (last call with this values - for loop mechanism)
// 13, 18,          to down -> rec rec -> no more to down
// 17,              to left -> rec  (last call with this values - for loop mechanism)
// 12, 7,           to top  -> rec rec -> guard statement return
// 6,               to left -> rec  (last call with this values - for loop mechanism)
// 11, 16]          to down => rec rec (everything (for loop ) returning)

// const directions = [
//   [-1, 0], //up
//   [0, 1], //right
//   [1, 0], //down
//   [0, -1], //left
// ];

console.log(traversalDFS(testMatrix));
