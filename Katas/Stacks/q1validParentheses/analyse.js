/*
    First question before we are going to use this ds:
        - do we want to process received data in order which stack is providing data?
            why? because last in, fist out


    Task:
        Given a string containing only parentheses, determine if it is valid.
        The string is valid if all parentheses are closed.

        { [ ( ) ] }  - true

        { [ ( ) ] ] - false

        { ( [ ) ) } - false  (order matter too)

        { ( [ ]     - false


    Step 1: Verify the constraints

            Does an empty string count as a valid?
        
    Step 2: Write out some test cases
    
            ""        - true
            "{[]}"    - true
            "{[[}"    - false
            "{[(])}"  - false (order) 1st idea - multiple pointers pattern!
            "{[]()}"  - true

*/
