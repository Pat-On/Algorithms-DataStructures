/*
    Given a binary tree, return the level order 
    traversal of the nodes' values as an array.


    Step 1: Verify the constraints

        What do we return if the tree is empty?
            - return an empty array, because we return array

    Step 2: write out some test cases

                    3
                  /   \
                6        1
               /  \    /  \
            9      2        4
          /  \
               5
              /  \
            8

    Returning Array of the array
    [[3], [6,1], [9, 2, 4], [5], [8]]
---------------------------------------------------


            3
           / \    returning: [[3]]

    
---------------------------------------------------
    null returning: []

---------------------------------------------------
    Worse case

            O
             \
              O
               \
                O
                 \
                  O
                   \
                    O

---------------------------------------------------
Techniques to use:
    BFS
    In-order



                    3
                  /   \
                6        1
               /  \    /  \
            9      2        4
          /  \
               5
              /  \
            8


1. Identify level of tree
2. Initialize our array
3. Push this array to our results array

           Pseudo-code

BFS = function(root){
    res =[]
    q = root

    while(q.length) {
        bide =q.shift();
        res.push(node.val)

        if(node.left) q.push(node.left)
        if(node.right) q.push(node.right)
    }

    return res
}

*/
