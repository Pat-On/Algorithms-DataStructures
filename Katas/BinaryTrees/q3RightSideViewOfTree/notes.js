/*
    Given a binary tree, imagine you are standing
    to the right of the tree. 
    return an array of the values of the nodes you 
    can see ordered from top to bottom

    Step 1: Verify the constraints

        The same like in the a2 binary trees

    Step 2: Write out some test cases

                    3
                  /   \
                6        1
               /  \    /  \                      o
            9      2        4               >   /|\
          /  \                                   ^
               5
              /  \
            8

    answer: [1, 3, 6, 7, 8]


    null answer: []


                    3
                  /   \     answer: [3]




    -------------------------------------- BFS SOLUTION --------------------------------------

                    3
                  /   \
                6        1
               /  \    /  \                      o
            9      2        4               >   /|\
          /  \                                   ^
               5
              /  \
            8

    answer: [1, 3, 6, 7, 8]

    BFS is going level by level and task care about last item going from left to right

        Steps:
            1. Identify the end of the level
            2. add last nodes to results
            


*/
