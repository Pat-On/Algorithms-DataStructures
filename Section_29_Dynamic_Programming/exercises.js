// Recursive fib
// Big o 2^n - exponential :D
// we have plenty of duplicated calculations
function fib(n) {
  if (n <= 2) return 1;
  //   console.log(n);
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(50));

/* 
Dynamic programming
"A method for solving a complex problem by breaking
it down into a collection of simpler 
subproblems, solving each of those subproblems
just once, and storing their solutions."

STORING THEIR SOLUTIONS <- IMPORTANT
*/

/* 
MEMOIZATION

Storing the results of expensive
function calls and returning the
cached result when the same 
inputs occur again
*/

// A MEMO-IZED SOLUTION
// it is around O(n)
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;

  //   console.log(memo);
  return res;
}
console.log(fibMemo(100));

// Previous approach was TOP-DOWN

// ==================================================================================================================

// Different approach BOTTOM - UP
// from less comples problem to top, to the most complex part of code

// this strategy is called:

//              TABULATION:
//              STORING THE RESULT OF A PREVIOUS RESULT IN A TABLE USUALLY AN ARRAY
//              USUALLY NODE USING ITERATION
//              BETTER SPACE COMPLEXITY CAN BE ACHIEVED USING TABULATION

function finTabulated(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  //   console.log(fibNums);
  return fibNums[n];
}
console.log(finTabulated(100));

// important take away! Tabulated version is taking less space complexity than recursion
