// from collections import defaultdict

// class Solution(object):
//     def networkDelayTime(self, times, n, k):
//         """
//         :type times: List[List[int]]
//         :type n: int
//         :type k: int
//         :rtype: int
//         """
//         graph = defaultdict(list)
//         for src, dest, time in times:
//             graph[src].append((dest, time))
//         visited = {}
//         queue = [(k, 0)]
//         while queue:
//             node, time = queue.pop()
//             if node not in visited or time < visited[node]:
//                 visited[node] = time
//                 if node in graph:
//                     for adj_node, adj_node_time in graph[node]:
//                         queue.append((adj_node, adj_node_time + time))
//         if len(visited) < n:
//             return -1
//         return max(visited.values())

// times = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]]
// n = 5
// k = 1
// sol = Solution()
// print(sol.networkDelayTime(times, n, k))

const times = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
const n = 5;
const k = 1;

function networkDelayTime(times, n, k) {
  const defaultObject = {};

  for (let [source, destination, time] of times) {
    console.log(source, destination, time);
    defaultObject[source] = [destination, time];
  }

  const visited = {};
  const queue = [[k, 0]];

  while (queue.length > 0) {
    const [node, time] = queue.pop();
    if (!visited[node] || time < visited[node]) {
      visited[node] = time;

      console.log(defaultObject[node]);

      if (defaultObject[node]) {
        for (let [adjacentNode, adjacentNodeTime] of defaultObject[node]) {
          queue.append([adjacentNode, adjacentNodeTime + time]);
        }
      }
    }
    if (visited.length < n) {
      return -1;
    }
  }
  // return here the biggest value
  return "placeholder";
}

networkDelayTime(times, n, k);
