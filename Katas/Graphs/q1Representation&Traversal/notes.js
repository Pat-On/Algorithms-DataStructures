/*
                    Graphs - Recap
----------------------------------------------------------------------------------------------------
-------------------------------------- Graphs - Recap ----------------------------------------------
----------------------------------------------------------------------------------------------------
    complexity of graphs include how many types of graphs exists


    Graph - collection of the nodes

        node - vertex
        edge - connection


        Graphs include cycle as well. 

        graphs
            Directed - you can go only in pointed directions
            Undirected - go wherever you want



        graphs
            unweighted
            weighted


        last type of the graphs:
            UNCONNECTED GRAPHS <- GRAPH THAT HAVE SOME SECTION NOT CONNECTED TO EACH OTHER


        All binaries tree are graphs but not all graphs are binary tree! 


----------------------------------------------------------------------------------------------------
----------------------------- Representing our graphs ----------------------------------------------
------------------------- Adjacency List & Adjacency Matrix ----------------------------------------
----------------------------------------------------------------------------------------------------

Two most common ways of representing the graph


       1         5
        \       /
    0 -  3 - 4  
        /
       2


    Adjacency list - array that indexes correspond to the specific indexes and dependency

        0 [ [3],
        1   [3],
        2   [3],
        3   [0, 1, 2, 4],
        4   [3, 5],
        5   [4]  ]
    
    In some tasks you may have to use unique values of nodes to show their dependencies

        pluses of these Data Structure:
            - quick traversing from kids to parents
            - depends based on the number of the edges

-------------------------


                              1         5
                               \       /
                           0 -  3 - 4  
                               /
                              2

    Adjacency Matrix 

                      -- 0  1  2  3  4  5 --        starting 
                0    | [ 0, 0, 0, 1, 0, 0] |               0 - there is no connection
                1    | [ 0, 0, 0, 1, 0, 0] |               1 - there is connection
                2    | [ 0, 0, 0, 1, 0, 0] |          
                3    | [ 1, 1, 1, 0, 1, 0] |          
                4    | [ 0, 0, 0, 1, 0, 1] |
                5    | [ 0, 0, 0, 0, 1, 0] |
                      --                   --

        These data structure is taking plenty of space:
            - Space O(n2)


----------------------------------------------------------------------------------------------------
---------------------------- Breadth First Search in Graphs ----------------------------------------
----------------------------------------------------------------------------------------------------

        check screenshot: BFSGraphsExample.png

                JS files:
                        AdjacencyMatrixBFS.js
                        AdjacencyListBFS.js

----------------------------------------------------------------------------------------------------
------------------------------ Depth First Search in Graphs ----------------------------------------
----------------------------------------------------------------------------------------------------

iterative version of it - based on stack

*/
