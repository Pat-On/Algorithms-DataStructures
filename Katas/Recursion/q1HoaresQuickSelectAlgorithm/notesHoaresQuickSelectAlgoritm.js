/*
    This algorithm is utilizing the quick sort, where the algorithm is finding and sorting numbers index by index. 


    Simulation:


        [5, 3, 1, 6, 4, 2] ->  [1, 2, 3, 4, 5, 6]


        k = 2   idx to find = length - k
        

        Hoare's Quick Select algorithm
        ------------------------------
        Find kth smallest element in an unordered list



        [5, 3, 1, 6, 4, 2]  so we want to find 2nd element

        [5, 3, 1, 6, 4, 2] 
                        _

        [1, 2, 5, 6, 4, 3] 

        [1, 2]              [5, 6, 4, 3]
            |
        not important because all indexes on the left are smaller

        [5, 6, 4, 3]
                  _

        [3, 6, 4, 5]

        if pivot is equal length - k = 4 

        [6, 4, 5]
               _

        [4, 6, 5]

        if pivot is equal length - k = 4 

        [4, 5, 6]

        and now partition element which we are going to get is 4 - so that is exactly what we were looking for!! 


        So it is modify quick sort, with implemented condition into which side of sort we want to go! Nice!

        */
