const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const dfs = (grid, row, col, count) => {
  // prettier-ignore
  // boundaries
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) {
    return
  }
  // replacing values - distance
  grid[row][col] = count;

  // recursion in four directions
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
};

// T: O(n) (n * m)
// S: O(n)
const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      // recursion
      if (rooms[row][col] === GATE) {
        dfs(rooms, row, col, 0);
      }
    }
  }
  return rooms;
};

wallsAndGates(testMatrix);

console.log(testMatrix);
