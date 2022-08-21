const testMatrix = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

/*
    Sequential order:                               
        - Count fresh oranges                               
        - Put rotten oranges into queue                             

    BFS:
        - use queue size to track minutes
        - process rotting oranges:
            + rot adjacent fresh oranges
            + push into queue
            + decrement fresh oranges count

*/
// using indexes is easier because we have access to matrix at every time
// time: O(n)
const orangesRotting = function (matrix) {
  if (matrix.length === 0) return 0;

  const queue = [];
  let freshOranges = 0;

  // Sequential order:
  // Time: O(n)
  // space: O(n)
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // Put rotten oranges into queue
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]); // space: O(n)
      }
      // Count fresh oranges
      if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  let minutes = 0;
  let currentQueueSize = queue.length;

  // BFS:
  // time: O(n)
  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];

    // BFS -> in four direction
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];
      // prettier-ignore
      // boundary control condition
      if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
          continue;
        }

      // rooting process
      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  // simple check
  if (freshOranges !== 0) {
    return -1;
  }

  return minutes;
};

console.log(orangesRotting(testMatrix));
