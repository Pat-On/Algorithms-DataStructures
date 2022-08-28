/*
            Dynamic Programming

    For given staircase, the i-it step is assigned a
    non-negative cost indicated by a cost array.

    Once You pay the cost for a step, you can either climb
    one or two steps.
    Find the minimum cost to reach the top of the staircase.
    
    Your first step can either be the first or second step.


     
    representation is going to be array:
    cost [10, 15, 30]

                     _____
                     |Fin
                 ____|
            ____| 30
        ___| 15
        |10


    What is the minimum cost?
        we can start from 10 or 15

    variation (some examples)
        10 + 15 + fin
        15 + 30 + fin
        15 + fin   <--- optimal solution (min value)



---------- Recognize it's a dynamic programming problem ----------


most of the max min question optimization are going to be made base on the dynamic programming approach.

Recognize it's a dynamic programming problem
        - Recursion
    
    recap:

        template:


            const myRecursiveFunc = function(args){
                baseCases

                myRecursiveFunc(...);
            }


Recurrence Relation
        - Formula for the basis of a recursive solution

    
-- Most important take away --

Dynamic Programming has its roots in recursion! 


----------------------------------------------------------------------------------------------------
--------------------------------------------- STEP 1 -----------------------------------------------
----------------------------------------------------------------------------------------------------
--------------------------------------- Recurrence Relation-----------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


Recurrence relation - is the formula that help us understand what the actual recursive function we try to write
                        going to be.
                        

cost = [20, 15, 30, 5]                      myFunc(){                             
        0   1   2   3                           // base cases                      
                                                myFunc(...)
                                            }

What is the big problem what we are trying to solve:
    - minimum cost to traverse from the start stairs to end and the all the traversal patterns that we can take
    - co we want to go outside of the array. In our case that is index 4

Can we think about it as a repetitive problem?
    


                                        minCost(n)

                            /                                 \
                    min(minCost(n-1) ,                     minCost(n-2)
   cost(n-1) +  /           \                           /               \  cost (n-2) + what is bellow
        min(minCost(n-2), minCost(n-3))              min(minCost(n-3), minCost(n - 4))



                                            n=0

------ TOP to DOWN solution ----

Why?
    Because we have one end and many start - in short



    The biggest part is to understand in Dynamic programing build that 
    recursion tree 


    other example of input

    i < 0 return 0
    i === 0 return cost[0]
    i === 1 return cost[1]




----------------------------------------------------------------------------------------------------
--------------------------------------------- STEP 2 -----------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------- Memoizing Our Redundant Recursive Calls-------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


                cost = c                minCost = mC

                                                              We have pattern that we can calculate
                                                              I already did similar thing previously
                                                mC(i)
                                        /                   \
                 c[i]   +    min( m((i-1))        ,           min(((i - 2)))

                          /             \                       /       \
        c[i - 1]    m((i - 2))          m((i - 3))       c[1-2] +     m((i - 3)), m ((i -3))               
        
        
                                        (......)

                            base case:
                            i = 0 || i = 1
                

    We need to fit memoization process based on these repetitive function into our recursion

    Two main things to know here:
        - data structure: should match the datastructure that you receive as a argument
                 so we are going to initialize the empty array
                 because what we are doing is basically memorizing value at specific indexes



----------------------------------------------------------------------------------------------------
--------------------------------------------- STEP 3 -----------------------------------------------
----------------------------------------------------------------------------------------------------
------------------------------- Understanding The Bottom Up Approach -------------------------------
------------------------------------------(TABULATION)----------------------------------------------
----------------------------------------------------------------------------------------------------


cost = [20, 15, 30, 5] _        Recurrence Relation                                           
                                    minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2))
                                    minCost(1) = cost[i]
                                    minCost(0) = cost[0]


                                    Bottom up
            
        Main Goal - rewrite our solution from recursive to iterative solution, from bottom to top.




                                            minCost(4)
                                          /            \
                                        /               \
                cost[4] + min(minCost3)                 minCost(2)
                            /       \                       /       \
                           /         \                     /         \
                    minCost(2), minCost(1)             minCost(1), minCost(0)
                                            


        So:

        minCost(4) = cost[4] + min(minCost(3), minCost(2))
        minCost(3) = cost[3] + min(minCost(2), minCost(1))
        minCost(2) = cost[2] + min(minCost(1), minCost(0))
        minCost(1) = cost[1]
        minCost(1) = cost[0]




*/
