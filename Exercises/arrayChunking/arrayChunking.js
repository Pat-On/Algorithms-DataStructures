const breaker = require("../breaker_line")();

breaker();

// given an arra and chunk size, divide the array into many subbaray
// where each subarray is of length size

// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]

function chunk(array, size) {
  const arrayToReturn = [];

  // we need to itterate through array
  for (let i = 0; i < array.length; i += size) {
    // we need to create sub array length = size and add it to array
    arrayToReturn.push(array.slice(i, i + size));
    // 0 - 2
    // 2 - 4
    // 4 - 6

    // console.log(i, array.length);
  }

  //return the chunked array
  return arrayToReturn;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 10));

breaker();

function chunk2(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

console.log(chunk2([1, 2, 3, 4, 5], 2));
console.log(chunk2([1, 2, 3, 4], 2));
console.log(chunk2([1, 2, 3, 4, 5], 10));

breaker();

function chunk3(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(chunk3([1, 2, 3, 4, 5], 2));
console.log(chunk3([1, 2, 3, 4], 2));
console.log(chunk3([1, 2, 3, 4, 5], 10));
