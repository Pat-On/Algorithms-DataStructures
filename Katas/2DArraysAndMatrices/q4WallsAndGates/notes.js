/*
        Question:

            Given a 2D array containing - 
                1's (walls)
                0's (gates)
                ING's (Empty room)

            Fill each empty room with the number of steps to the nearest gate.

            If it is impossible to reach a gate, leave INF as the value.
            INF is equal to 2 147 483 647


------------------------ Examples of arrays ------------------------

    Input                                       Output:
               0    1    2    3                        0    1    2    3                 INF - Empty
        --              --                        --              --                    -1 - Wall
       0 | [ INF,  -1,   0, INF] |               0 | [ 3,  -1,   0,   1] |               0 - Gate                                      
       1 | [ INF, INF, INF,  -1] |               1 | [ 2,   2,   1,  -1] |                                                     
       2 | [ INF,  -1, INF,  -1] |               2 | [ 1,  -1,   2,  -1] |        
       3 | [   0,  -1, INF, INF] |               3 | [ 0,  -1,   3,   4] |      
        --              --                        --              --  


    Input                                       Output:
               0    1    2    3                         0    1    2    3
        --              --                        --              --                    
       0 | [ INF,  -1,   0, INF] |               0 | [INF,  -1,   0,   1] |                                                             
       1 | [  -1, INF, INF,  -1] |               1 | [ -1,   2,   1,  -1] |                                                     
       2 | [ INF,  -1, INF,  -1] |               2 | [  1,  -1,   2,  -1] |        
       3 | [   0,  -1, INF, INF] |               3 | [  0,  -1,   3,   4] |      
        --              --                        --              --  



------------------------ Logical Solution ------------------------

        Distance type questions are very popular in 2-D array world :>

        Important take away is to consider the relation between in our case cell <--> gate

            Example of wrong conclusion:

                INF as a start
                Gate as a end 

                You have many starts cells so there is need of repeat many action to get to the gate which is one
                many to one relation

            Example of correct conclusion - better solution

                Gate as a start
                ING as a end

                You are doing calculation from the start so you do not need to repeat yourself so much
                one to many relation


            You can use BFS and DFS 



            STEPS:

                - Sequential iteration - to find all gates

                - DFS - stating from gates and counting distance from gate to INF
*/
