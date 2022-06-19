const breaker = require("../breaker_line")();
const memoize = require("../memorizerFunction");

breaker();

function fib(n) {
  let results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  console.log(results);
  return results[results.length - 1];
}

console.log(fib(4));

breaker();

function fibRec(n) {
  if (n < 2) {
    return n;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(4));

breaker();

const fibWithMemoWrapper = memoize(fibRec);

console.log(fibWithMemoWrapper(40));
