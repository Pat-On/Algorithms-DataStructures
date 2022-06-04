// just recap

let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return "done";
  }

  counter++;
  return inception();
}

console.log(inception());

/*

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed.
Usually you have 2 returns for base case and recursive case



Anything you do with a recursion can be done iteratively (loop)

**************************************************************************************************************

                            Recursion
        DRY                                     Large Stack
        Readability

You use it most of the time with the data structures where You do not know how many levels it has! 

Tail Call Optimization - call recursion with memory efficiency hmm


**************************************************************************************************************

        When To Use Recursion

Every time you are using a tree or converting

Something into a tree, consider recursion

    1. Divided into a number of subproblems that are smaller instances of the same problem
    2. Each instance of the sbproblem is identical in nature.
    3. The solutions of each subproblem can be combimed to solve the problem at hand

Divide and Conquer using recursion


*/
