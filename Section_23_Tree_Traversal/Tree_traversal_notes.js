/*
            Classic CS Problem

        How to visit all nodes in tree only once

    Traversing a tree

        Two ways:
    - Breadth-first Search

        across, layer by layer

    - Depth-first Search

        going down to the end and back



        THERE IS MANY DIFFERENT APPROACHES HOW TO TRAVERS THE TREE - THE ONLY ON SOLUTION DO NOT EXIST!


        
================================================================================================

                                 WHICH IS BETTER? BFS? DFS?


Time complexity is the same - we visit everysingle node once
                                 
Breadth First
- lots of nodes to keep track of!
- space complexity on the wide tree is huge
- space complexity on the long tree is smaller (breadth first is itterate tree by levels)

Deepth First
- space complexity is smaller when tree is wide
- space complecity is huge when tree branches are deeply nested (because it is going to the bottom first)


In case bellow depth first is horrible because we need to add plenty of nodes to memory
so BFT would be better in that case
        3
            17
                19
                    32
                        34
                            63
                                86
                                    91



DFS - In Order
    Used commonly with BST's. 
    Notice we get all nodes in the tree in their underlying order

DFS - Post Order
    

DFS  - Pre Order
    Can be used t0o "export" a tree structure so that it is easily reconstructed or copied

*/
