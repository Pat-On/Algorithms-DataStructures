/*
    to validate we are taking first value in the root and starting to compare numbers going to bottom.


    
*/

// null marking that the min and max was not set-up yet
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  // take for consideration order of execution from the top to the bottom

  // recursion - movement to the left or to the right
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}
