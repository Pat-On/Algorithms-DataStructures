const testMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const dfs = function (grid, currentRow, currentCol) {
  // prettier-ignore
  if(currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) return;

  if (grid[currentRow][currentCol] === 1) {
    grid[currentRow][currentCol] = 0;

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const row = currentDir[0];
      const col = currentDir[1];
      // recursion
      dfs(grid, currentRow + row, currentCol + col);
    }
  }
};

// Time: O(m * n)
// Space 0(m * n)
const numberOfIslands = function (grid) {
  if (!grid.length) return 0;

  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        islandCount++;
        // first call of recursion
        dfs(grid, row, col);
      }
    }
  }

  return islandCount;
};

console.log(numberOfIslands(testMatrix));
