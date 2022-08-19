/*
                        Binary Search Trees

    - they are normal tree with additional logic that take care for order of the tree


    Task:
        - Given a binary tree, determine if it is a valid binary search tree

                 Lesser      12      Greater
                          /     \
                        /         \
                        8          18
                      /  \        /   \
                     5   10      14    25

    Step 1: Verify the constraints

        Can there be duplicate values in the tree?
            - Yes, if You receive duplicate values the tree is not a valid binary search tree
              ! This is very important question that you should ask!
                
              How we are going to put duplicated values? 
                - to the left?
                - to the right?
                - hold the count of the value in node?
            
    Step 2: Write out some test cases

        Valid tree

                            12      
                          /     \
                        /         \
                        8          18
                      /  \        /   \
                     5   10      14    25

        null -> true (because technically is still valid BST? LOL?)


        10 (one node - root)  -> True


        Invalid cases:


                12              return False
              /   \
            15     17


                12              return False
              /   \
             9     10


                15              return False
              /   \
             12     17
            / \     / \
         10    16  16  18
             

                15              return False
              /   \
             12     18
            / \     / \
         10    14  13  20

*/
