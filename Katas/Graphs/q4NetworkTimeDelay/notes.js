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





------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------- Logical Solution --------------------------------------------------- 

   n = 3  k = 2    times = [[2, 3, 4]]



   so we are starting from the node pointed in the k variable and we are setting it to 0 in the array

    example:  k=1
              [
              1  0
              2  Infinity
              3  Infinity
              4  Infinity
              5  Infinity
              ]


              Step:
      what is the distance to immediate neighbors / edges

    example:  k=1
              [
              1  0
              2  9
              3  Infinity
              4  2
              5  Infinity
              ]



              What is the smallest value in the array
              Answer: 4

              in our example 4 --4---> 2
                             4 --6---> 5

    example:  k=1
              [
              1  0
              2  6
              3  Infinity
              4  2
              5  8
              ]

                We are now blocking 4 and we are looking for next smallest value: 2

                2 --1--> 5

    example:  k=1
              [
              1  0
              2  6
              3  Infinity
              4  2
              5  6 + 1 = 7
              ]


              We are now blocking 4 and we are looking for next smallest value: 5

              5 --7--> 3

    example:  k=1
              [
              1  0
              2  6
              3  7 + 7 = 14
              4  2
              5  7
              ]

              we can not go to anywhere because we checked entire graph


------- graph with the edge that we can not access
                - we would have the infinity in the array on the unaccessible node




          There is good solution to implement it with the priority queue. <3 NICE




------------------------------------------------------------------------------------------------------------------------
------------------------------------ Thinking about negative numbers ---------------------------------------------------

Best Priority queue for dijkstra's - remove and not allow for duplicates                        Space for improvement
              this solution improving the efficiency of the code, 
              because in worse case we would got all references to the node from children nodes.






                                                
             In our implementation od dijkstra algorithm it is going to work  
             but efficiency of the code is not quarantined because it might be now 
             Time: O(e) - so basically it might be equal to the number of the edges
             - In our solution we used the heap which is assuming that we always receiving the positive numbers.
             Dijkstra's algorithm is not handling negatives cycles well, and stuck in loop.
             
                    2       
              1 ---------> 2                0 [
              |            ^                1
           3  |            |                2           
              |            | -6             3     ]               
              v            | 
              3----------> 4                                                                                              
                     4                                                        
                                                                           
                                                                           
------------------------------------------------------------------------------------------------------------------------                                                                         
------------------------------------------- The Bellman-Ford Algorithm -------------------------------------------------                                                                         
                                                                          
- Bellman-Ford Algorithm


- Dynamic Programming (algorithm paradigm)


                        Greedy                        Optimization      min / max



                      4         1           4
                      ----> A -----> C -----------|
                    /               ^             V
                 S                / 6  \ 7        E
                    \           /        V        ^
                      -------> B -------> D-------|
                        2           5         10



              ------------------- S -------------------
              |         |         |         |         |                    We are repeating plenty of calculation within              
            4 |      4  |       2 |       2 |       2 |                       Space tree (distances)
              |         |         |         |         |                        
              A         A         B         B         B                    This is something what is improved by dynamic programing - Memoization
              |         |         |         |         |                        
            1 |      1  |       6 |       6 |       5 |                        Memoization -> process of saving values
              |         |         |         |         |                                       so we use more space but improve time efficiency
              C         C         C         C         D                         
              |         |         |         |         |                         
            4 |       7 |       5 |       7 |      10 |                         
              |         |         |         |         |                         
              E         D         E         D         E                         
                        |                   |                                 
              9      10 |        12      10 |        17                           
                        |                   |                                 
                        E                   E                                 

                      22                  25

 */
