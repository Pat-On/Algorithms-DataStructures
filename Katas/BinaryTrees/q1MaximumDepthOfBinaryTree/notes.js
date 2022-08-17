/*
                                    Binary Trees and Binary Search Trees


        Five solution which we can use to solve problems related to the Binary Trees

        - Breadth First Search

        - Depth First Search

        - Pre-order Traversal
        - In-order Traversal
        - Post-order Traversal

        Q: Given a binary tree, find its maximum depth.

        Maximum depth is the number of nodes
        along the longest path from the root node
        to the furthest leaf node

        Step 1: Verify the constraints

            What do we return if the tree is empty?
                - Return 0. because maximum depth is 0
    

        Step 2: Write out some test cases

            For the binary trees you want to have:
                - best case
                - null case
                - worse case (example bellow)


            - best case Answer: 5

                O
               / \
              O   O
             / \    
               O
              / \
                 O
                / \
                  O
                 / \

            
            - null case Answer: 0

            - single case Answer: 1

                O
               / \


            - worse case Answer 5

            O
             \
              O
               \
                O
                 \
                  O
                   \
                    O

            Case when all nodes are on the one side
            It has great impact on the performance




*/
