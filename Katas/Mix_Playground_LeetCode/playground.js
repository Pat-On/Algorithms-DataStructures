var mergeTwoLists = function (list1, list2) {
  let newArr = [];
  while (list1.length !== 0 || list2.length !== 0) {
    if (list1[0] <= list2[0]) {
      newArr.push(list1.shift());
      continue;
    } else if (list1[0] > list2[0]) {
      newArr.push(list2.shift());
      continue;
    }
    if (list1.length !== 0) {
      newArr = newArr.concat(list1);
      list1 = [];
    }
    if (list2.length !== 0) {
      newArr = newArr.concat(list2);
      list2 = [];
    }
  }
  return newArr;
};

console.log(mergeTwoLists([1, 2, 3, 4], [1, 2, 3, 4]));
