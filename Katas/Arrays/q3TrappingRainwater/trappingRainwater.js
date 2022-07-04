/* 
    Given an array of integers representing an
    elevation map where the width of each bar is 1,
    return how much rainwater can be trapped.

    [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

    the only distance between elements when the element value
    has 0. 

    Step 1: Verify the constraints

        Do the left and right sides of the graph count as walls
            - No, the sides are not walls

        Will there be negative integers
            - No, assume all integers are positive

     
    Step 2: Write out some test cases

        [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]   Answer: 8
        []          Answer 0
        [3]         Answer 0
        [3,4, 3]    Answer 0

    Step 3: Figure out a solution without code


        - entire array to get the answer
        - smallest hight determine how much water can be hold
        - high of other elements within container determine how much water can be hold - reduce it very often
        - break problem into the smaller elements - base on individual elements? 


        General Formula 
            
            current water = min(maxL, maxR) - current Hight

             
*/
