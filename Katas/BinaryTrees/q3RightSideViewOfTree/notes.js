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

                    1
                  /   \
                2        3
               /  \    /  \                      o
            4      5        6               >   /|\
          /  \                                   ^
               7
              /  \
            8

    answer: [1, 3, 6, 7, 8]

    BFS is going level by level and task care about last item going from left to right

        Steps:
            1. Identify the end of the level
            2. add last nodes to results


-------------------------------------- DFS SOLUTION --------------------------------------
                                        Recursive

                    1                       [1, 3, 6, 7, 8]
                  /   \
                2        3
               /  \    /  \                      o
            4      5        6               >   /|\
          /  \                                   ^
               7
              /  \
            8                            

    1. Prioritize right side
    2. Keep track level of nodes - to take the most right node

    Normal Left to Right Traversal: 
        - Pre-order:  Node Left  Right
        - In-order:   Left Node  Right
        - Post-order: Left Right Node

    In our example we are going to go from right to left
        - Pre-order:  Node  Right Left    [1, 3, 6, 2, 5, 4, 7, 8]      <-- is the closes to the answer
            (grab value before going to left or right)
        - In-order:   Right Node  Left    [6, 3, 1, 5, 2, 7, 8, 4] 
            (we going as far to the right as we can and then we take value)
        - Post-order: Right Left  Node    [6, 3, 5, 8, 7, 4, 2, 1] 
            (we are going as far to the right and left as we can and then we take values)

    note: changing the order might give you better way in solving problem.
            1. Decide DFS or BFS
            2. Consider order R to L or L to R
            3. Consider Pre-order, In-order or Post-order



        ------------------- Modified example to verify assumption -------------------

                    1                       [1, 3, 6, 9, 11]
                  /   \
                2        3
               /  \    /  \                      o
            4      5        6               >   /|\
          /  \       \                           ^
               7      9
              /  \
            8     11

        - Pre-order:  Node  Right Left    [1, 3, 6, 2, 5, 9, 4, 7, 11, 8]   
            First element that showed up is the most right element at that level

        - In-order:   Right Node  Left     

        - Post-order: Right Left  Node    
*/
