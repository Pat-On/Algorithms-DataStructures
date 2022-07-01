/*
    You are given an array of positive integers where
    each integer represents the height of a vertical line
    on a chart. 
    Find two lines which together with the 
    x-axis forms a container that would hold the greatest amount of water

    Return the area of water it would hold. 



    [1, 8, 6, 2, 9, 4]

    area = L x W   (Length x Width)


    1. Step 1: Verify the constraints 

    - Does the thickness of the lines affect the area?
        No, assume they take up no space

    - Do the left and right sides of the graph count as walls?
        - No, the sides cannot be used to form a container


    [1, 7, 2, 0, 1, 3]
        You cannot use the containers left and right side
        so in case of this array you can only use the 7 amd 3 as the biggest value
        and create the container


    - Does a higher line inside our container affect our area?
        No, lines inside a contain er o not affect the area

        It means the other higher line inside do no effect the calculation

    
    Step 2: Write out some test cases

        the best case

        [7, 1, 2, 3, 9]

        *            *   <-- greatest and the furthers values from all of the element

        7 - length and 4 width (4 - 0 = 4)

        [] = 0
        [8] = 0

        [6, 9, 3, 4, 5, 8] 

        6 (l) x 5(w) = 30
        8 (l) x 4(w) = 32 better!

    Step 3: Figure out a solution without code - logical solution

        Greatest in the tasks description indicate that we are going to compare all possible values
        (maximum value question)
        So You need to calculate all the containers in that case! :>


         0  1  2  3  4      Max area: L x W
        [7, 1, 2, 3, 9]               min(a, b) x (bi - ai)  <- formula

        maxArea = 0

        min(7, 1) x (1 - 0)
                1 x 1 = 1
                
        maxArea = 1

        ---> then iterate and iterate


*/
