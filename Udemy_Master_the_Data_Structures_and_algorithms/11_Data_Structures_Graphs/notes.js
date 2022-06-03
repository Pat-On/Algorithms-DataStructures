// EDGE LIST
const grapgh = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List you can use array and objects
// the index of the array is the value of the actual graph node
const graph_adjecent_List_array_version = [[2], [2, 3], [0, 1, 3], [1, 2]];
//               0     1       2        3

const graph_adjecent_list_object_version = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix
const graph_matrix = [
  [0, 0, 1, 0], // zero is connected to 2
  [0, 0, 1, 1], // 1 is connected to 2 and 3
  [1, 1, 0, 1], // 2 is connected to 0, 1, 3
  [0, 1, 1, 0], // 3 is connected to 1 and 2
];

const graph_matrix_object = {
  0: [0, 0, 1, 0], // zero is connected to 2
  1: [0, 0, 1, 1], // 1 is connected to 2 and 3
  2: [1, 1, 0, 1], // 2 is connected to 0, 1, 3
  3: [0, 1, 1, 0], // 3 is connected to 1 and 2
};
