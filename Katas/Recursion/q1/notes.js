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
