const heightsArray = [4, 8, 1, 2, 3, 9];

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;

  // Big O (n^2) - Time Complexity
  // Big O (1) - Space Complexity - no scaling values
  for (let p1 = 0; p1 < heights.length; p1++) {
    // do we need to do anything else? - NO
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]); // one of the way of doing it
      const width = p2 - p1;
      const area = height * width;

      // one of the way of doing it
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer(heightsArray));
