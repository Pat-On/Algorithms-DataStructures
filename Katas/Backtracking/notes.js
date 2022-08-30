/*

            Backtracking is solving similar problems to dynamic programing,

                the key difference is that backtracking need to:

                    Return ALL solutions
                            or
                    Return a VALID solution amongst all solutions


            ----------- Backtracking ---------
                            Kata


            Create a function that solves for any 9x9 sudoku puzzle given.

                Each of the digits 1-9 must occur exactly once in each row.

                Each of the digits 1-9 must occur exactly once in each column.

                Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.


        Step 1: Verify the constraints

            What happens if the board cannot be solved?
                - Leave the sudoku puzzle as is.

        Step 2: Write out some test cases

            because the examples are time consuming
            you may think about base case
            and some examples that are invalid



--------------------------------------------------------------------------------------------------------------------------
-------------------------------------------- Backtracking Template -------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------

If You need to all solution or all valid solution or one working solution <-- it mean backtracking could be possible option to you

Backtracking

    Brute force solution - we are going to compute all solutions, there are no optimizations

    Recursive


Check img: sudokuBoard.png

    requirements:
        unique 1-9 in rows
        unique 1-9 in cols
        unique 1-9 in 3x3



--------------------------------------------------------------------------------------------------------------------------
-------------------------------------------- Applying Backtracking Template ----------------------------------------------
----------------------------------------------- To Sudoku Solver Logic----------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------

args position - next grid cell
ans - one of the colored squares

recursion func(args, ans){                      <----- THIS IS SUPER BRUTAL!
    for (1-9) {                 // add
        ans.push(currentVal)
    }
    if (isValid()) {            // decision - is it valid selection?
        recursion func(args, ans)   <-- this might be later broken so we would have to backtrack
    }
    remove currentVal from ans  // removal
}


*/
