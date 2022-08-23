/*
        There are a total of n courses to take, labeled from 0 to n-1.

        Some courses have prerequisite courses. 
        This is expressed as a pair i.e. [1, 0] which indicates you must
        take course 0 before taking course 1. 

        Given the total number of courses and an array of prerequisite pairs,
        return if it is possible to finish all courses

        -------------
        Find the graph structure:

            There are a total of n courses to take, labeled from 0 to n-1

                n = 6       6 courses: 0, 1, 2, 3, 4, 5

            
                ---- next
        
            Some courses have prerequisite courses. 
            This is expressed as a pair i.e. [1, 0] which indicates you must
            take course 0 before taking course 1. 


                so before we are going to take course 1, we have to finish course 1.

                visualization:
                    directed edge:
                            0 ----> 1



            Given the total number of courses and an array of prerequisite pairs,
            return if it is possible to finish all courses

                prerequisites: [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
                n: 6
                                3 -> 4 <
                          < /   ^       \
                        0       \       |           No cycle
                         \        \     |           
                          \         \   |           Return: true
                            \          \
                              > 1       5
                                    \   | 
                                        v
                                      > 2


                When we can not finish some courses? 
                    When we have some cycle?

                        3 ----> 4
                          <----

                    So two courses are prerequisites to each other
                                   


----------------- Step 1: Verify the constraints -----------------

        Can we have courses unconnected to other courses?
            - yes, account for separate course chains


----------------- Step 2: Write out some test cases -----------------
[test cases in graph questions are quite complicated in different dimensions, so it is good to work 
    with an interviewer to work it out, because you may not cover most important parts by yourself]

            Best Case

                prerequisites: [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
                n 6
                                3 -> 4 <
                          < /   ^       \
                        0       \       |           No cycle
                         \        \     |           
                          \         \   |           Return: True
                            \          \
                              > 1       5
                                    \   | 
                                        v
                                      > 2



            Case with cycle and two separated nodes
                - Unconnected graph
                - with cycle

                n = 7   prerequisites = [[0, 3], [1, 0], [2, 1], [4, 5], [5, 6], [6, 4]]
                                                Cycle:
                            0 <---- 3           4 ---> 6
                            |                   ^     /
                            |                   |   /               Return: False
                            v                   | v
                            1 -----> 2          5 


            n = 0 
            []
            Return: True


----------------- Brutal Solution -----------------
----------------------- BFS -----------------------
---------------------- Logic ----------------------


                prerequisites: [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
                n: 6
                                3 -> 4 <
                          < /   ^       \
                        0       \       |           No cycle
                         \        \     |           
                          \         \   |           Return: true
                            \          \
                              > 1       5
                                    \   | 
                                        v
                                      > 2


        - Prerequisites array is pointing us this is direct graph.
            like events that needed to happen before - some sort of conditioning.

                1 -> 2 -> 3 

            an event 3 cannot happen before 2 and an event to cannot happen before an event 1


            So we need to find a tool to detect the cycles!

        
        We need to create adjacency list:

                prerequisites: [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
                n: 6   


Nodes / vertexes:     Nodes/vertexes that node is directly traversing
                0    [ 1       ]
                1    [ 2       ]
                2    [         ]
                3    [ 0, 4    ]
                4    [         ]
                5    [ 2, 3, 4 ]

        How to identify that cycle exist? 
                rabbit tortoise algorithm?


        How to handle unconnected graphs?
            We need to traverse from every node, to be sure that we have checked everything

*/
