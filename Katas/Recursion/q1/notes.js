/*
    Given an unsorted array, return the kth largest element.
    It is the kth largest element in sorted order,
    not the kth distinct element.

    k = 2

    [5, 3, 1, 6, 4, 2]          [1, 2, 3, 4, 5, 6]
                                             _

    k = 4

    [2, 3, 1, 2, 4, 2]          [1, 2, 2, 2, 3, 4]
                                 _                  <- distinct value
                                       _            <- indistinct 


    Step 1: Verify the constraints

        Can we get an array where k is larger than the array length?
            No, assume an answer is always available

    
    Step 2: write out some test cases
            lets use the same examples

    k = 2

    [5, 3, 1, 6, 4, 2]          [1, 2, 3, 4, 5, 6]
                                             _

    k = 4

    [2, 3, 1, 2, 4, 2]          [1, 2, 2, 2, 3, 4]

    k = 1

    [3]  
     _


*/

/*
    Divide and Conquer - recap

        1. Multi-branched recursion.
        2. Breaks a problem into a multiple smaller but same sub-problems.
        3. Combines the solutions of sub-problems into the solution for the original problem.

            example: Quicksort

            [2, 7, 8, 6, 4, 1, 9, 3, 5]

            [2, 4, 1, 3, 5, 8, 9, 6, 7]     ---> (five is sorted)
                         _

            [2, 4, 1, 3]            [8, 9, 6, 7]   ---> sub-arrays
            

*/
