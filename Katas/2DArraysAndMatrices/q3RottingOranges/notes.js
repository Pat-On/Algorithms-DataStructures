/*
    Given a 2D array containing 0's (empty cell), 
    1's (fresh orange) and 2's (rotten orange).

    Every minute, all fresh orange immediately 
    adjacent (4 directions) to rotten oranges will rot. 

    How many minutes must pass until all oranges are rotten?




    example (process)

                    --                --        starting 
                    | [ 2, 1, 1, 0, 0] |               
                    | [ 1, 1, 1, 0, 0] |             
                    | [ 0, 1, 1, 1, 1] |
                    | [ 0, 1, 0, 0, 1] |
                    --                --

                    --                --        Answer 1
                    | [ 2, 2, 1, 0, 0] |               
                    | [ 2, 1, 1, 0, 0] |             
                    | [ 0, 1, 1, 1, 1] |
                    | [ 0, 1, 0, 0, 1] |
                    --                --
                    --                --        Answer 2
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 1, 0, 0] |             
                    | [ 0, 1, 1, 1, 1] |
                    | [ 0, 1, 0, 0, 1] |
                    --                --
                    --                --        Answer 3
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 2, 0, 0] |             
                    | [ 0, 2, 1, 1, 1] |
                    | [ 0, 1, 0, 0, 1] |
                    --                --
                    --                --        Answer 4
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 2, 0, 0] |             
                    | [ 0, 2, 2, 1, 1] |
                    | [ 0, 2, 0, 0, 1] |
                    --                --            
                    
                    --                --        Answer 5
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 2, 0, 0] |             
                    | [ 0, 2, 2, 2, 1] |
                    | [ 0, 2, 0, 0, 1] |
                    --                --      
                    
                    --                --        Answer 6
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 2, 0, 0] |             
                    | [ 0, 2, 2, 2, 2] |
                    | [ 0, 2, 0, 0, 1] |
                    --                --     

                    --                --        Answer 7
                    | [ 2, 2, 2, 0, 0] |               
                    | [ 2, 2, 2, 0, 0] |             
                    | [ 0, 2, 2, 2, 2] |
                    | [ 0, 2, 0, 0, 2] |
                    --                --     


    Step 1: Verify the constraints

        What do we return if it's not possible?
            - if all the oranges can not rot, return -1


                    --                --        starting 
                    | [ 2, 1, 0, 0, 0] |               
                    | [ 1, 1, 0, 0, 0] |             
                    | [ 0, 0, 0, 1, 2] |
                    | [ 0, 1, 0, 0, 1] |
                    --                --        return -1
            One orange can not rot, because of condition

        What do we return if there are no oranges?
            - Return 0 if there are no oranges


    Step 2: Write out some test cases

        A: 7                            A: -1
        --                --            --                --                 
        | [ 2, 1, 1, 0, 0] |            | [ 2, 1, 0, 0, 0] |                                  
        | [ 1, 1, 1, 0, 0] |            | [ 1, 1, 0, 0, 0] |                              
        | [ 0, 1, 1, 1, 1] |            | [ 0, 0, 0, 1, 2] |     
        | [ 0, 1, 0, 0, 1] |            | [ 0, 1, 0, 0, 1] |     
        --                --            --                --            

        []          A: 0
        [[][]]      A: 0


------------------------------------------------------------------
    ---------------------- Initial Logic ----------------------
------------------------------------------------------------------
                  
        --                --                      
        | [ 2, 1, 1, 0, 0] |                                       
        | [ 1, 1, 1, 0, 0] |                                   
        | [ 0, 1, 1, 1, 1] |          
        | [ 0, 1, 0, 0, 2] |          
        --                --          

        What about the case where you have 2 source of rotting?


        How to figure out if there left some not rotted oranges?
            - after rotting process
                - we can check array in subsequence order if there is any left not rotted orange
            - or we can count oranges at the beginning and deduct good oranges from the counter
                + what solution is better?

Sequential order solving:
        What are the initial rotting oranges 
        How we keep the track of fresh oranges

    How to implement logic for the rotting pattern?  <----- BFS
        - order has to be track by minute and minute based

    How to group these all minute by minute
        - it similar to binary tree where we ere counting the levels


------------------------------------------------------------------
  ---------------------- rest of the Logic ----------------------
------------------------------------------------------------------

            0   1  2  3  4
        --                --                      
       0 | [ 2, 1, 1, 0, 0] |                                       
       1 | [ 1, 1, 1, 0, 0] |                                   
       2 | [ 0, 1, 1, 1, 1] |          
       3 | [ 0, 1, 0, 0, 2] |           f: 9
        --                --          


q: [[0, 0], [1,4]]
                        How to process it now to keep track of levels / minutes <- Similar issue was in the binary trees kata

minutes: 2 <--- because of the length of the queue 2


How now process these two elements and reinstate the values?
    - if statement if(queueLength === 0){
        reassign value and iterate again    <---clever and simple NICE!
    }


*/
