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


------------------------- Logical Solution -------------------------


                                  12
                        /          |       \
                       7           |        18
      (-Infinity <  7  < 12)       |   (12 <  18 < +Infinitive )
                /       \          |      /       \
                5       9          |      14      25
  (-Infinity < 5 < 7)  (7< 9 < 12) | 12 < 14 < 18)  (18 < 25 < +Infinitive )
                    /              |        \
                    8              |          15
                (7 < 8 < 9)        |    (14 < 15 < 18)
                                   |                \
                                   |                16
                                   |            (15 < 16 < 18)
                                   |                    \
                                   |                    17
                                   |                (16 < 17 < 18)

    Do the way how we navigate through tree matter?
        - DFS - because we need to keep relation parent kid 
        - Pre-order Traversals


        * we can utilize recursion and pass the value from top to the bottom! - !Important to remember!


        - to the left value need to be less than 12
        - when you are going to the left and the to right the value need to be for example 7 < 9 < 12


    On most left and most right sides of tree we do not have both values to compare?
        So how we can make it consistent? - boundaries

    -Infinity and +Infinitive <- I was right! 
*/
