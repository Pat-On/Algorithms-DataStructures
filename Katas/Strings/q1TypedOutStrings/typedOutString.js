/*


strings:
"abcdef"
"ABCDEF"

other way of thinking about strings:

It is almost like array, linear structure, order etc
["a", "b", "c", "d"]
  0    1    2    3
*/

/*
    Given two strings S and T, return if they
    equal when both are typed out.
    Any # that appears in the string counts as a backspace.


    "cb#d" 

    printed out: "cd"

    S: "ab#c"   T: "az#c"

        "ac"        "ac"

    EQUAL - they match


    1. Verify the constraints
        What happens when two #s appears beside each other?

            delete the two values before the first #

            example "ab##"  --> ""
            
        What happens to # when there is no character to remove?

            if deletes nothing then, just like backspace would. 

            example: "a###b" --> "b"

        Are two empty string equal to each other?
            
            Yes, consider two empty strings as equal

            "x#z#" --> ""
            "a#"   --> ""
                        True - equal

        Dopes case sensitivity matter?

            Yes it does, "a" does not equal "A"

        
*/

/*
    Step 2: Write out some test cases

        Best test case

        S: "ab#z"       T:"az#z"    Return True
        s: "abc#d"      T:"acc#c"   Return False
        s: "x#y#2#"     T:"a#"      Return True
        s: "a###b"      T: "b"      Return true
        s: "Ab#z"       T: "ab#z"   Return False


*/

/*
        Logical way of solving problem

        "ab#z" -> "az"
        "az#z" -> "az"

        Here we are doing normal str to str comparison, 
        so we can compare lengths etc

                Return True

        

*/
