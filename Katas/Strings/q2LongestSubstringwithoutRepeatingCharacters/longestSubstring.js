/*
    Given a string, find the length of the longest substring without repeating characters


    "abccabb"


    Step 1. Verify the constraints

        Is the substring contiguous?
            yes, look for a substring not a subsequence

            substring vs subsequence
                
                'abcbbd                    "abcbbd"

            "abc" substring             "abc__d" subsequence

        Does case sensitive matter
            No,  assume all characters in the string are lowercase


            
        Step 2: Write out some test cases

            "abccabb" - abc cab -> 3
            "ccccccc" - c  -> 1
            ""   -> 0
            "abcbda" - abc cbda -> 4


    */
