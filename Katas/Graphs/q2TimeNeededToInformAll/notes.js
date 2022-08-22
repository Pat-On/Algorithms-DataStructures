/*
                    2-D arrays are considered as a graph with a very specific set of rules <-- interesting

        Sometimes questions are very abstract and You need to think it over to get idea that it is related to graph



        Question:
                ***
                    A company has n employees with unique IDs from 0 to n-1
                    The head of the company has the id headID.
                ***

                            n = 8           8 employees: 0, 1, 2, 3, 4, 5, 6, 7

                                            headID = 4

                ***
                    You will receive a managers array where managers[i] is 
                    the ID of the manager for employee i.
                    Each employee has one direct manager.
                    The company head has no manager (managers[headID]  = -1).
                    It's guaranteed the subordinations relationship will have a tree structure. 
                ***

                                            0, 1, 2, 3, 4, 5, 6, 7  <-- indexes of every single manager array
                                managers = [2, 2, 4, 6, -1, 4, 4, 5]



                            N-ary tree - this is the tree where nodes can have at list n children. so 5 10 etc



                                                    4
                                            /      |       \
                                            5       2        6
                                        /       / \        \
                                        7        0 1         3


                            When we are getting a question where we have N-ary tree, most likely it is going to be Graph question

                ***
                    The head of the company wants to inform all employees of news.
                    He will inform his direct subordinates who will inform their direct subordinates
                    and so on until everyone knows the news.
                    
                    You will receive an informTime array where informTime[i] is the time if takes for employee i to inform all their direct subordinates.
                    Return the total number of minutes it takes to inform all employees of the news.
                **

                                          0  1  2  3  4  5  6  7   <--- employee indexes
                            informTime = [0, 0, 4, 0, 7, 3, 6, 0]


                total answer is: 
                                numOfMinutes: 13 
                                for the: 4(7) -> 6(6) = 13


                Summary:
                        Questions related to the graphs quite often are complicated and You have to think exactly about what tasks is asking you


                            n = 8           8 employees: 0, 1, 2, 3, 4, 5, 6, 7

                                        headID = 4
                            
                                        0, 1, 2, 3, 4, 5, 6, 7  <-- indexes of every single manager array
                            managers = [2, 2, 4, 6, -1, 4, 4, 5]

                                          0  1  2  3  4  5  6  7   <--- employee indexes
                            informTime = [0, 0, 4, 0, 7, 3, 6, 0]


        ------------------------
        ------------------------
        Step 1: Verify the constraints

            Try to think about all types of graphs and ask question which would determine which type of graph to choose

            cyclic?
                no

                helper q:
                    Can employees have more than 1 manager?
                        - No, employees can only have 1 manager


            unconnected?
                no

                helper q:
                    Does every employee have a manager?
                        yes, every employees has a manager except the head of the company
                        who has no manager.

            weighted?
                yes
            
            directed?
                yes because it is tree



        ------------------------
        ------------------------
        Step 2: Write out some test cases


                            n = 8           8 employees: 0, 1, 2, 3, 4, 5, 6, 7

                                        headID = 4
                            
                                        0, 1, 2, 3, 4, 5, 6, 7  <-- indexes of every single manager array
                            managers = [2, 2, 4, 6, -1, 4, 4, 5]

                                          0  1  2  3  4  5  6  7   <--- employee indexes
                            informTime = [0, 0, 4, 0, 7, 3, 6, 0]


                            answer: 13

            ------------------------

                            n=1 headId = 0
                            managers = [-1]
                            informTime = [0]

                            answer: 0

            ------------------------    
                    All question from binary tree are useful here.


            The worse case:
                        
                n = 7 headId=6

                managers = [1, 2, 3, 4, 5, 6, -1]

                informTime = [0, 6, 5, 4, 3, 2, 1]

                visualization: 
                    x
                      \
                        x
                          \ 
                            x
                              \
                                x
                                  \ 
                                   x

                answer: 21

    


        In many graphs question we are not going to receive ready graph structure.
        Especially in these types of questions.
        We are not receiving any graph, we need to transform the values into the adjacent list.


        task: find logical approach how to build these type of structure and dependencies.

-------------------------------------------------------------------------------------------------
------------------------ How to represent our graph as an adjacency list ------------------------
-------------------------------------------------------------------------------------------------
                        
                n = 7 headId=6

                managers = [1, 2, 3, 4, 5, 6, -1]
                            0  1  2  3  4  5  6
              informTime = [0, 6, 5, 4, 3, 2, 1]


              we have directed graph because of:
                - tree structure (n-tree)
                - manager - employee relation

                                                    4
                                             /      |       \
                                            5       2        6
                                           /       / \        \
                                          7        0 1         3

                reason to use adjacency matrix:
                    - nodes are connected each other with multiple connections

                    in our case we do not have so many connections so we should use adjacency list

                

                What we need to create adjacency list:
                    - adjacency list will be made base on the employees as a managers and sub-array which contain they
                    direct subordinates
                    - subordination relationship - main key of this graph


                Visualization:

indexes = managers
                    0 [ [ ]
                    1   [ ]
                    2   [ 0 ]
                    3   [ ]             subordinations
                    4   [ 2, 5, 6]
                    5   [ ]
                    6   [ 3 ]
                    7   [  ]  ]


        informTime = [0, 0, 4, 0, 7, 3, 6, 0]  <-- so we are going to take this values base on the index


-------------------------------------------------------------------------------------------------
------------------------------ Logical solution with DFS Traversal ------------------------------
-------------------------------------------------------------------------------------------------


bfs - the same space complexity O(n) when all employee are direct subordinates of the head

dfs - the same space complexity O(n) when all employees one by one are subordinates in top to bottom "branch"

DFS - in this exercise is more logical because of the way how it works


    What is the maximum time to tell the news to your all subordinates?
        Interesting:
            - it is solving subproblem but as well the main problem <-- nice


            Base cases:
                - base case - edge - no subordinates
                - once the vertex explorer all subordinates - we need to get maximum time from all branches
*/
