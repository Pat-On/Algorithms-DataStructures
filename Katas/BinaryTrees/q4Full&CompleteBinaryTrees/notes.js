/*
--------------------------------------- Full & Complete Binary Trees ---------------------------------------

        Full Tree - when every tree node has zero or two children
                    can have many levels and not all levels must be completely full

        Complete Tree - Every level of tree is full


        Full and Complete Tree - Two cases are met.



        Question:

        Given a complete binary tree, count the number of nodes.

                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               15
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   O O    O

                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               12
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   


                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               8
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O     

        
        Step 1: Verify the constraints

            the same just return numbers:

        Step 2: Write out some test cases


                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               15
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   O O    O

        Not most efficient solution
            BFS and DFS would work because we need to touch all nodes
                T: O(n)
                S: O(n)

        How we can use complete binary tree to bring down:
                O(n)
                O(log n)
                O(1)
            We want to achieve something like log n or 1

--------------------------------------- Binary tree and similarity to binary search ---------------------------------------

                                                    Height of complete full tree
                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               15      log n = 4 (levels of tree)
                               O      O     O    O                      
                            /    \   / \   / \   /  \
                            O    O  O   O O   O O    O                  N/2
        
    What characteristics has complete tree?
        - Complete tree are complete on every single level excluding last level
        - So variability in the number of nodes is only in the lowest level
    What are our goals we are trying to achieve?\
        - We want to achieve something better that O(n) so:
                + O(log n) or O(1)

                                                        
                                        O                         | 2^0 = 1             2^h-1       O(1) <--- to calculate hight of tree
                                      /   \                       |      
                                   O         O                    | 2^1 = 2
                                 /   \      /   \                 |            
                               O      O     O    O                | 2^2 = 4             
                            /    \   / \   / \   /  \  -----------
                            O    O  O   O O   O O    O            | 2^3 = 8
                                                                  | 2^4 = 16
                                                                  | 2^5 = 32


        How to get h of the tree?
            - We need to go DFS from left           O(log n) <--- to find the hight of the tree
                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               
                               O      O     O    O                      
                            /    \   / \   / \   /  \
                            O    n  n   n n   n n    n      
                            
                            
--------------------------------------- TIP: ---------------------------------------

You can try to find the last right node on the bottom and calculate how many nodes we have on the bottom?

    - How we can do it? It sounds like binary search but how to implement it?
    - tree in some level of abstraction and math is like array


--------------------------------------- Answer: ---------------------------------------

                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               12
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   n n    n   | min: 1 max: 8 (2^h-1)

    You can assign to the bottom indexes

                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               12
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   n n    n  
                           ---------------------------
                            0    1  2   3 4   5 6    7


Questions:
---------------
    When we step in our function? We have no idea how many nodes are in the last level
        - how to determine in efficient way what is the bottom most right node?!
    
    How we can effectively traverse our tree? 
        - by going down to check the lowest node?!

    
    ---------------------- How to find the most right node on the bottom? ----------------------

                                        O
                                      /   \
                                   O         O
                                 /   \      /   \               12
                               O      O     O    O
                            /    \   / \   / \   /  \
                            O    O  O   O O   n n    n  
                           ---------------------------
                            0    1  2   3 4   5 6    7     n/2

    the only search log n is binary search
        - these values are already in some kind of the order
    min: 1
    max: 2^h-1



                                O    O  O   O O   n n    n  
                           ---------------------------
                            0    1  2   3 4   5 6    7     n/2

                        L0                              R7
                            (0+7) / 2 = 3.5
                            -> 4 round up   (!We are rounding up because it is inclusive not exclusive)

                                        L4              R7
                            (7 + 4) / 2 = 5.5
                            -> 6 round up

                                        L4          R6

                                        L4     R5
                                        L4 R4  - When they overlap, is the moment that we know that we found the value - the most right values

    -----------------------------------------------------------------------------------------------                                    
    ---------------------- How to navigate route down to some value to down? ----------------------                                                
                            

*/
