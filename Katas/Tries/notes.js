/*
                Tries

            Variation of tree
            N-ary tree
            It holds string
            useful:
                to find some words and characters


    Question:

        Implement a trie with insert, search and startsWith methods:

            interface Trie {
                void insert(String word);
                Boolean search(String word);
                Boolean startsWith(String prefix);
            }


    Step 1: Verify the constraints

            Can we implement helper classes /objects
                Yes, You can use any features you see fit.
    
    Step 2: Write out some test cases

            Check screenshots

------------------------------------------------------------------------------------
----------------------------------- Logic ------------------------------------------
------------------------------------------------------------------------------------

Similar to N-tree, but just letters with extra data on node - end - boolean

Trie Node {
    end: Boolean
    keys: {}
}

*/
