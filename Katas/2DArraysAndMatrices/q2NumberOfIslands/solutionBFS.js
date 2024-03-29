const testMatrix = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];
// BFS has marginal space improvement compare to DFS in this implementation
// because DFS will put all elements into the stack so the space is 0(m * n)
const numberOfIslands = function (matrix) {
  if (matrix.length === 0) return 0;
  let islandCount = 0;

  // row  <-- sequential search O(n) time
  for (let row = 0; row < matrix.length; row++) {
    // col
    for (let col = 0; col < matrix[0].length; col++) {
      // only if land
      if (matrix[row][col] === 1) {
        islandCount++;
        matrix[row][col] = 0;

        //bfs <---- BFS O(n) time
        const queue = []; // space complexity (entire array is land - the worse case)
        queue.push([row, col]);

        // bfs while loop
        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            // prettier-ignore
            // boundaries of while iteration
            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;

            if (matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }

  return islandCount;
};

// so total time: 0(n + n) -> O(2n) -> O(n)
// If You want to be more specific it is going to be O(m * n) high and width of array

console.log(numberOfIslands(testMatrix));
