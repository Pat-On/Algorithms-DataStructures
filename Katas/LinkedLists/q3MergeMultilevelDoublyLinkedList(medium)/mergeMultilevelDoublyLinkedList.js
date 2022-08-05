/*
    Given a doubly linked list, list nodes also have a child property
    that can point to a separate doubly linked list.

    these child lists can also have one or more child doubly linked list of their own
    and so on

    Return the list as a single level flattened doubly linked list



    Step 1: Verify the constraints

    Can a doubly linked list have multiple list nodes?
        - Yes, every list node can have multiple levels of children.

    What do we do with child properties after flattening?
        - just set the child property value to null

  
        
    Step 2: Write out some test cases

        - we can have multiple nested levels


            1 - 2 - 3 - 4 - 5 - 6 
                |           |
                |           12  - 13
                7 - 8 - 9
                    |
                    10 - 11

        Final output
            1 - 2 - 7 - 8 - 10 - 11 - 9 - 3 - 4 - 5 - 12 - 13 - 6



        - null -> null
        - 3 -> 3


        main problem:
            - flatting out entire list

        subproblem 
            - merging child doubly linked list into the parent
*/
