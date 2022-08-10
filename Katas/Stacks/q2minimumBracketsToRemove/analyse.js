/*
    Given a string only containing round brackets '('and')'
    and lowercase characters, remove the least amount of brackets so the string is valid. 

    A string is considered valid if it is empty or 
    if there are brackets, they all close

    Examples:

    "a)bc(d)"  "abc(d)"

    "(ab(c)a"   "(abc)a"  or  "ab(c)a"

    "))(("      ""


    Step 1: Verify the constraints

        What do we return from our algorithm?
            Return a valid string with the fewest brackets removed

        Will there be spaces in the string?
            No, the string only contains lowercase characters, "('and')"

        Is a string containing only lowercase characters valid?
            Yes, you do not need any brackets for a string to be valid


    Step 2: Write out some test cases

        "a)bc(d)"  -> "abc(d)"

        "(ab(a)d" -> "ab(c)d"
                  -> "(abc)d"

        "))(("    -> ""


------------------------------------------------

    1. So how to get to conclusion that we need to use stack?
        when the correct order of processing the data is important
        + when you need to store and retrieve the data
            <-------
            ------->
            "abc(d)"    "(ab(a)d"  "))(("

    Left / right has no difference because we are going to always looking for closing bracket


    "("a-z")"   - we do not have to worry about a-z because it has no impact on validity


    We need to remove minimum number of bracket to make string valid
    - what is condition to remove left or right bracket

                    "(ab(a)d"

    - When we can remove the bracket from string? 
    only when we are going to reach end of the string

    - how to track it?
        we will store the index so:
           
        
        "(ab(a)d"

        [0, 3] 
            then we notice right sight bracket
        [0]
            end of the string

        [0]
            remove all brackets base on indexes


        "))(("
            When we are iterating we will remove left directed brackets which we can not close

        ")(("

        "(("
            Then we checking right directed brackets
            [2, 3]
            and we remove them

        ""



    */
