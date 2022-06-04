function findFactorialIterative(number) {
  // O(n)
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  //0(n)
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
