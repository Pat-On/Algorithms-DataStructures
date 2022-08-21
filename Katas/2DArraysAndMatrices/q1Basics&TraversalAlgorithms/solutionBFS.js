const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

// time: O(n)
// space: O(n)
const traversalBFS = function (matrix) {
  // brutal but effective and easy
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false)); // space: O(n)

  const values = []; // space: O(n)

  const queue = [[0, 0]]; // never would grow to n

  // similar to traversing the graph - just there If i remember well I used queue.length > 0
  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    // prettier-ignore
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]
    ) {
      continue;
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);

    // iteration through all direction
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
};

console.log(traversalBFS(testMatrix));
