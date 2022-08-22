// Plenty of similarities between Trees, 2-D array and Graphs

const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function (n, headID, managers, informTime) {
  const adjList = managers.map(() => []); // time O(n)

  // creating adjacent list
  // time (O(n))
  // adjacent list: space: O(n)
  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if (manager === -1) continue;

    adjList[manager].push(employee);
  }

  // recursion - 1st call
  return dfs(headID, adjList, informTime); // time O(n)
};

// space in worse case O(n)
const dfs = function (currentId, adjList, informTime) {
  // no subordinates so 0
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  const subordinates = adjList[currentId];
  // iteration through subordinates of manager
  // time O(n)
  for (let i = 0; i < subordinates.length; i++) {
    // recursion
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }

  return max + informTime[currentId];
};

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));
