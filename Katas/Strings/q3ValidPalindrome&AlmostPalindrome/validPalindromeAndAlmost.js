/*
    String Sub-problems Palindromes

        Sub-problem is a problem we have to solve along the way
        to solve the main problem

        
        main problem: find length of longest unique string

        sub problem: pattern matching - unique substring


        Palindrome is a string that reads the same forwards and backwards

        "aba" "cdc" "a" "race car"

        "A man, a plan, a canal: Panama"

                transformation ->    "amanaplanacanalpanama"



        Three ways of approaching Palindrome problem:

        1) We are define pointers and put them on opposite sides directing to middle

        aaaaabbaaaa
        X         Y

        aaaabbaaaa
            xy

        aaaabaaaa
            x
            y

        2) we are define pointer and put them on the middle of palindrome and directing outside in opposite direction
        aaaabaaaa
            x
            y

        aaaabbaaaa
            xy

        aaaaabbaaaa
        X         Y


        3) We are making copy of string and reversing it and then compare

        raceacar 
        x
        
        racacar     <- reversed
        y



*/
