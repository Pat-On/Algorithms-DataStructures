/*
          
                                KNIGHT PROBABILITY :>

                        On a given nxn chessboard, a knight piece will 
                        start at the r-th ron and c-th column.
                        The knight will attempt to make k moves.

                        A knight can move in 8 possible ways.
                        Each move will choose one of these 8 at random.
                        The knight continues moving until it finishes k moves
                        or it moves off the chessboard.
                        
                        Return the probability that the knight is one the chessboard
                        after finishes moving


---------- analysis ----------

                        On a given nxn chessboard, a knight piece will 
                        start at the r-th ron and c-th column.
                        The knight will attempt to make k moves.

                        0  1  2  3  4  5
                    0  __|__|__|__|__|__|           r = 2
                    1  __|__|__|__|__|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  __|__|__|__|__|__|
                    4  __|__|__|__|__|__|
    k = 2           5  __|__|__|__|__|__|


                        A knight can move in 8 possible ways.
                        Each move will choose one of these 8 at random.

                        0  1  2  3  4  5
                    0  __|OO|__|OO|__|__|           r = 2
                    1  OO|__|__|__|OO|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  OO|__|__|__|OO|__|
                    4  __|OO|__|OO|__|__|           (possible moves - knight move on L shape)
    k = 2           5  __|__|__|__|__|__|


                        The knight continues moving until it finishes k moves
                        or it moves off the chessboard.
                        Return the probability that the knight is one the chessboard
                        after finishes moving

    Step 1:
                        0  1  2  3  4  5
                    0  __|OO|__|OO|__|__|           r = 2
                    1  OO|__|__|__|OO|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  OO|__|__|__|OO|__|
                    4  __|OO|__|OO|__|__|           all steps are possible
    k = 2           5  __|__|__|__|__|__|

    Step 2: 
                        0  1  2  3  4  5
                    0  __|__|00|__|__|__|           r = 2
                    1  XX|__|__|__|__|__|           c = 2
                    2  __|__|00|__|__|__|
    N = 6           3  __|00|__|__|__|__|
                    4  __|__|__|__|__|__|           3 steps are possible to make
    k = 2           5  __|__|__|__|__|__|           5 other steps would mow out of the chess board
                                                    Probability: 0.375



    ------------------------ Step 1: Verify the constraints ------------------------


    How many decimals do we round to?
        - Do not round, leave the answer as is

     
    ------------------------ Step 2: write out some test cases ------------------------


                        0  1  2  3  4  5
                    0  __|OO|__|OO|__|__|           r = 2
                    1  OO|__|__|__|OO|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  OO|__|__|__|OO|__|
                    4  __|OO|__|OO|__|__|           all 1st steps are possible
    k = 2           5  __|__|__|__|__|__|   



    N = 0 K=2 r=1 c=2
        no board
        return 0    


    N = 2 K = 3 R = 1 C = 1
        to small board
        return 0

    N = 2 k = 0 r = 1 c = 1
        no moves so 100%
        return 1

    ------------------------ Step 1 Identifying The Recurrence Relation ------------------------  
    
                        0  1  2  3  4  5
                    0  __|OO|__|OO|__|__|           r = 2
                    1  OO|__|__|__|OO|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  OO|__|__|__|OO|__|
                    4  __|OO|__|OO|__|__|           
    k = 2           5  __|__|__|__|__|__|   





    How to find out that the question is related to dynamic programing?
        - nothing to do with min and max
        but if you are going to think about what dynamic programing should do for you
            optimizing all possible solution that exist! 
        So overall probability is question of this type.
            !IMPORTANT - We need to check if there is overlapping problem that we can use recursion on

    k - movements
    r - x
    c - y

    directions = [  [-2, -1],
                    [-2,  1],

                    [-1, 2]
                    [ 1, 2]

                    [+2, 1],
                    [-2, 1],

                    [1, -2],
                    [-1, -2]
                    ]

    knightP(k, r, c) {
        // recursion
        // only if we have any move left - k k === 0 break
        (x, y) <= DirectionsKnightP(k-1, r+x, c+y) (one from 8 possible)
    }

Boundaries - base case
    we are on the board:
        0 =< r < n, 0=< c <n

    We are not on the board:
        r < 0 || r > n || c < 0 || c > n


    ------------------------ Step 2 Memoization ------------------------  

    Repetition is contained within k.
    if starting point is the same, repetition of further moves is going to be the same.
    <---- interesting ---->




    ------------------------ Step 3 Figuring out the logic for bottom up solution ------------------------  
            Can be called tabulation 
            It is iterative solution
   


    
                        0  1  2  3  4  5
                    0  __|OO|__|OO|__|__|           r = 2
                    1  OO|__|__|__|OO|__|           c = 2
                    2  __|__|XX|__|__|__|
    N = 6           3  OO|__|__|__|OO|__|
                    4  __|OO|__|OO|__|__|           
    k = 2           5  __|__|__|__|__|__|   


It is done base on:
    - what you are storing in dp (memoization)
        + recursion

    k - movements
    r - x
    c - y


    k - is driving entire logic here!


    So iteration would go "up-side-down" to the recursion

        check screenshot visualizationTabulation.png


    At the end you have to add all variables from graph

*/
