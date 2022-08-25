/*
        Algorithmic approaches  <-- this chapter

        Sorting                 <-- already done

        Greedy Methods          <-- this chapter

        Divide and Conquer      <-- already done

        Dynamic Programming     <-- this chapter

        Backtracking            <-- this chapter



- Graphs Dijkstra's Algorithm - greedy method

Question:

        There are n network nodes labelled 1 to N

        Given a times array, containing edges represented by
        arrays [ u, v, w ] where u is the source node, v is the
        target node, and w is the time taken to travel from the
        source node to the target node.

        Send a signal from node k, return how long it takes 
        for all nodes to receive the signal.

        Return -1 if it is impossible.


        n = 5           nodes = [1, 2, 3, 4, 5]

        time = [[1,2,9], [1,4,2], [2,5,1], [4,2,4], [4,5,6],
                    [3,2,3], [3,1,5], [5,3,7] ]
                    

        k = 1       This is starting points from which we have to iterate through entire graph


                                        5
                    ------------------------------------
                    |                                  |        
                    v       9                          |                             
                    1 -----------> 2 <-----            |                                            
                    |             |         \          |                                                
                  2 |           / |          \  3      |         
                    |      4 /    |           \        |      
                    |      /    1 |             ------ 3   
                    |    /        |                    ^
                    |  /          |                    |
                    v/            v                    |
                    4------------> 5--------------------
                            6                   7


        Answer: 14 minutes




                                        5
                    ------------------------------------
                    |                                  |   
                    v       9                          |   
                    1 -----------> 2 <-----            |   
                    |             |         \          |   
                  2 |           / |          \  3      |   
                    |      4 /    |           \        |   
                    |      /    1 |             ------ 3   
                    |    /        | 
                    |  /          | 
                    v/            v 
                    4------------> 5
                            6       


 
                        k = 1 (graph above starting from one would return -1 because you can not access node no 3)


                        k = 3 (You can start from 3 and access all nodes)


        Step 1: Verify the constraints


            Can the graph be unconnected?
                Yes, account for an unconnected graph
                - if unconnected return -1

            Can the time be negative integers?
                No, the weight of edges is always positive

        Step 2: Write out some test cases



            Best case test
        n = 5           nodes = [1, 2, 3, 4, 5]

        time = [[1,2,9], [1,4,2], [2,5,1], [4,2,4], [4,5,6],
                    [3,2,3], [3,1,5], [5,3,7] ]
                    

        k = 1       This is starting points from which we have to iterate through entire graph


                                        5
                    ------------------------------------
                    |                                  |        
                    v       9                          |                             
                    1 -----------> 2 <-----            |                                            
                    |             |         \          |                                                
                  2 |           / |          \  3      |         
                    |      4 /    |           \        |      
                    |      /    1 |             ------ 3   
                    |    /        |                    ^
                    |  /          |                    |
                    v/            v                    |
                    4------------> 5--------------------
                            6                   7

        Return 14



        n = 3  k = 2    times = [[2, 3, 4]]

                            4   
            1           2--------->3

        return -1




        n = 3   k = 1       times=[[1,2,8], [3,1,3]] 
    
            3       8
        3 -----> 1 ---> 2


        return -1



        Directed weighted graph from any specific nodes use algorithms and you are looking for the shotes path:
                - Djikstra Algorithm
                - 

------------------------------------------------------------------------------------------------------------------------
-------------------------------------------- Greedy Method Dijkstra's Algorithm ----------------------------------------        


This algorithm can be only applied to the  directed weighted graphs

they are helping you what is the shortest distance from node zero to any other node



                      Greedy Methods

    (algorithmic paradigm)

    We are working with problems with are very simple

          Optimization Problem

          when You are looking for Max or Min value only

        Dijkstra's algorithms basically cover that limitation of the greedy algorithm and its "greediness"







 */
