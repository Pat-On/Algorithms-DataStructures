/*
    Given a linked list and numbers m and n, return it
    back with only positions m to n in reverse

    1 -> 2 -> 3 -> 4 -> 5 -> null

    m = 2  n = 4

    1st - how we are going to interpret length of linked list
        from 0 or from 1

    results:
    1 -> 4 -> 3 -> 2 -> 5 -> null

    step 1: Verify the constraints
        Will m and n always be within the bound of the linked list?
            Yes, assume 1 <= m <= n <= length of linked list

        Can we receive m and n values for the whole linked list
            yes, we can receive m = 1 and n = length of linked list

        
    Step 2: Write out some test cases

        best case test
        1 -> 2 -> 3 -> 4 -> 5 -> null 
            m = 2 n = 4
            return: 1 -> 4 -> 3 -> 2 -> 5 -> null

        entire linked list
        1 -> 2 -> 3 -> 4 -> 5 -> null 
            m = 1 n = 5
            return 5 -> 4 -> 3 -> 2 -> 1 -> null

        5 -> null 
            m = 1 n = 1

        null  m = 0 n = 0




        STEPS TO REVERSE LINKED LIST

        
        1 Get current node
        2 Store next value
        3. update next value to list so far
        4. store current Node as list so far
        5. update current node to stored next valuer at 2

        

        1 -> 2 ->[ 3 -> 4 -> 5 ]-> 6 -> 7 -> null
                  m         n
                  3         5
        
        return
        1 -> 2 ->[ 5 -> 4 -> 3 ]-> 6 -> 7 -> null

        so we are only reversing part of the linked list


        We need to take care for
            m - l
            m
            n
            n + 1

        We need to track:
        - head
        - position
        - current node
        - start
        - tail
        */
