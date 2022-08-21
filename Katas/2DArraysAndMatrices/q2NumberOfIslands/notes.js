/*
                2-D Arrays Approach

                row    --                 --
            0  | [x, x, x, x, x, x] |               6 x 6 
            1  | [x, x, x, x, x, x] |
            2  | [x, x, x, x, x, x] |
            3  | [x, x, x, x, x, x] |
            4  | [x, x, x, x, x, x] |
            5  | [x, x, x, x, x, x] |
            --                  --

    Values follow to patterns
        - limited (very specific values example A B C)

        - unlimited (can be practically anything)

    
    We have DFS and BFS in 2-D arrays to. 

    Sequential order:
        from left to right
        to the begging of other line
        from left to right



    ----------------- Limited Values -----------------


    IS there a relationship between the values
        - in our example between start and end there is relationship:
            + we need to get from start to end
        - there is relationship between green and blue values which are walls and you cannot cross them

    Is there repeated subproblem that repeated would solve the problem in general4
        - example: 
            + we can solve the problem for only one element start

---------------------------------------------------------------------------------------
---------------------------------- Number Of Islands ----------------------------------
---------------------------------------------------------------------------------------


Given a 2D array containing only 1's (land) and 0's (water), count the number of islands.
and island is land connected horizontally or vertically.



                        0  1  2  3  4  (column)
                    0  | [ 1, 1, 1, 1, 0] |               
                    1  | [ 1, 1, 0, 1, 0] |             current Row: 0 Col: 0
                    2  | [ 1, 1, 0, 0, 1] |
                    3  | [ 0, 0, 0, 1, 1] |
                    --                    --
    Land - 1            No. Islands: 2
    Water - 0

    
    Step 1: Verify the constraints

        Are the edges of the 2D array water?
            Yes, assume anything outside of the 2D array is water

    
    Step 2: Write out some test cases


    Best Case
                    --                --        Answer 2
                    | [ 1, 1, 1, 1, 0] |               
                    | [ 1, 1, 0, 1, 0] |             
                    | [ 1, 1, 0, 0, 1] |
                    | [ 0, 0, 0, 1, 1] |
                    --                --



    Example that help to tackle the problem
                    --                --
                    | [ 0, 1, 0, 1, 0] |        Answer 7
                    | [ 1, 0, 1, 0, 1] |            
                    | [ 0, 1, 1, 1, 0] |
                    | [ 1, 0, 1, 0, 1] |
                    --                --



    []              Answer 0 

    [[],[]]         Answer 0

---------------------------------------------------------------------------
    ------------------------- Logical Approach -------------------------
---------------------------------------------------------------------------



Array similarities - it is just array with the levels.
                        with the array we would  go left to right
                        but in 2-d we go left right and top down

Sequential order in case of 2-D arrays:
                    from left to right
                    to down 
                    and again from left to right

In case of it, you may incorporate sequential order iteration and then add to it BFS or DFS 
        to solve subproblem/


    Subproblem: 




    0 - is not increasing our counter
    1 - We have two cases:
        - consider as a new island
        - it is land so it is part of the existing island and we do not increment 
            (new and old land)


    In what order are we going to take order? (traversal order)

        BFS 
        DFS
        Sequential Order - sequential order is important sometimes because BFS and DFS
                            is not going to give you correct answer (exploration pattern)
                How to identify that I need to use sequential order:
                    - first condition is that you want to touch all elements
                        and the order is not important
                    - another benefit is that we are not taking any additional space in implementation (because of queue in BFS and DFS)

                Time:  O(n)
                Space: 0(1)

                So in our case, BFS and DFS are going to be used to solve subproblem

                    --                --        Answer 2
                    | [ 1, 1, 1, 1, 0] |               
                    | [ 1, 1, 0, 1, 0] |             
                    | [ 1, 1, 0, 0, 1] |
                    | [ 0, 0, 0, 1, 1] |
                    --                --


                    starting from [0, 0]  -> counter++  = 1
                    [0, 1] -> We found new element, how to find if it is old or new land? 
                        - we can iterate around all 1's values - it behavior of BFS and DFS 
                            (they work in some way in closed box where "wall" can be end of the 2-d array or some values within array)
                        - plus we can traverse all 1 to 0 and because of it we are not going to count it again as an island


                    --                --        Answer 1
                    | [ 0, 0, 0, 0, 0] |               
                    | [ 0, 0, 0, 0, 0] |             
                    | [ 0, 0, 0, 0, 1] |
                    | [ 0, 0, 0, 1, 1] |
                    --                --
                    
                    --                --        Answer 2
                    | [ 0, 0, 0, 0, 0] |               
                    | [ 0, 0, 0, 0, 0] |             
                    | [ 0, 0, 0, 0, 0] |
                    | [ 0, 0, 0, 0, 0] |
                    --                --


                    Final note:
                        It would work with a configuration of 
                            BFS <--- general iteration
                            or
                            DFS <--- general iteration

                                and then solving subproblem can be either BFS and DFS with the trick to change all values
                                because array that we are passing is reference, so recursion will work already on changed values
---------------------------------------------------------------------------
    ------------------------- Traversals -------------------------
---------------------------------------------------------------------------



*/
