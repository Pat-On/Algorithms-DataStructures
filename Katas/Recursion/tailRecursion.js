/*
    Tail recursion does not apply to every language and every engine which run the language


    Tail Recursion

    _________________________________________
    Normal recursion space: O(n)
        4!
        4 * 3 * 2 * 1 
        24
*/

function recFactorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * recFactorial(x - 1);
  }
}
/*
        Execution:
        recFactorial(4);
        4 * recFactorial(3);
        4 * ( 3 * recFactorial(2))
        4 * (3 * ( 2 * recFactorial(1)))
        4 * (3 * ( 2 * 1))
            -> 24
    

    _________________________________________
    Tail recursion space: O(1)
*/

// O(1) space complexity
function tailFactorial(x, totalSoFar = 1) {
  if (x === 0) {
    return totalSoFar;
  } else {
    return tailFactorial(x - 1, totalSoFar * x);
  }
}
/*
        Execution:
        tailFactorial(4)   <--- totalSoFar has default value(1)
        tailFactorial(4, 1) 
        tailFactorial(3, 4) 
        tailFactorial(2, 12) 
        tailFactorial(1, 24) 
        tailFactorial(0, 24) 


        we are not waiting here for anything to calculate
        they are just individual calls

        So in normal recursion we are waiting with all stacked functions calls for the x, 
        which is going to be returned in first if statement
        - good engine is going to know that it can remove the call that does not matter anymore


        Some languages are not supporting tail recursion unfortunately 
        In JavaScript compiler not all compiler know how to handle tail recursion
*/
