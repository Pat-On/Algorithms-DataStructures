/*
    2-D Array and 2-D Matrices are most of the time two the same things

          0  1  2  3  4  5   (column)
row    --                 --
    0  | [x, x, x, x, x, x] |               6 x 6 
    1  | [x, x, x, x, x, x] |
    2  | [x, x, x, x, x, x] |
    3  | [x, x, x, x, x, x] |
    4  | [x, x, x, x, x, x] |
    5  | [x, x, x, x, x, x] |
       --                  --

    ------------------- 2-D Arrays Traversals -------------------

    direction of traversing:
        up:     -1, 0
        down:   +1, 0
        left:   0, -1
        right:  0, +1

    diagonal pattern may have sense, but most of the time we are traversing 2-d arrays based on the 4 main directions

    --------------------------------------------------------------
    ------------------- 2-D Arrays BFS and DFS -------------------


        ------------------- 2-D Arrays DFS -------------------

          0  1  2  3  4  (column)
    0  | [ 1,  2,  3,  4,  5] |               6 x 6 
    1  | [ 6,  7,  8,  9, 10] |             current Row: 0 Col: 0
    2  | [11, 12, 13, 14, 15] |
    3  | [16, 17, 18, 19, 20] |
       --               --

    [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]

    We can explore on of the four dimension (up down left right) and then exploring other to max and then changing again




        ------------------- 2-D Arrays BFS -------------------

          0  1  2  3  4  (column)
    0  | [ 1,  2,  3,  4,  5] |               6 x 6 
    1  | [ 6,  7,  8,  9, 10] |             current Row: 0 Col: 0
    2  | [11, 12, 13, 14, 15] |
    3  | [16, 17, 18, 19, 20] |
       --               --

*/
