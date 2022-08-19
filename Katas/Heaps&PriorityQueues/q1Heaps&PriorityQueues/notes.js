/*
                Introducing Heaps - Recap

        Heap resemble binary tree - complete binary tree

        Two variation of heaps:
            - Max Heap
            - Min Heap

            no guaranty that the second and third value are going to have the 2nd and the 3rd biggest or smallest value



                               50                                   Max Heap
                        /              \
                       40              25
                    /      \        /      \
                   20      35      10      15



                            BFS
                [50, 40, 25, 20, 35, 10, 15]


        Difference between array and class tree is that using the array we need to find mathematical formula 
        to find for the relationship with we had before in the tree

        So We need to find relation between indexes in array and the position of it in the tree

                         [50, 40, 25, 20, 35, 10, 15]               parent: floor((idx - 1)/2)    
                           0   1   2   3   4   5   6                child: left   (idx * 2) + 1
                                                                           right  (idx * 2) + 2


*/
