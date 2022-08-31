/*
                        Interface Design

                        Class Base Interface


    Given the following interface, implement its methods.

        interface Monarchy{
            void birth(String child, String parent);
            void death(String name);
            List<String> getOrderOfSuccession()

        }



        Monarchy Family Tree

                                            Jake
                            Catherin        TOM     Celine
                    Jane            Mark                Peter
                    Farah



    new Monarchy('Jake')
    birth("Catherine", "Jake")
    birth("TOM", "Jake")
    birth("Celine", "Jake")

    birth('Jane", "Catherine")
    

    birth("Celine", "Peter")

    birth("Farah", "Jane")

    birth("Mark", "Catherine")


    // You need to ask what is the order of succession 
    getOrderOfSuccession()

        ["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom, "Celine", "Peter"]4


    death("Jake")
    death("Jane")
    getOrderOfSuccession()

        [ "Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"]


    /// Then if we have these entire logic You need to decide by yourself what data structures you are going to implement.



    Step 1: Verify the constraints

        Can we implement helper classes/objects?

            yes you can use any features you see fit.

    Step 2: Write out some test cases

        so you need to call your test cases and check if they work in the way that you predicted.

const mon = new Monarchy("Jake");
mon.birth("Catherine", "Jake");
mon.birth("Tom", "Jake");
mon.birth("Celine", "Jake");
mon.birth("Peter", "Celine");
mon.birth("Jane", "Catherine");
mon.birth("Farah", "Jane");
mon.birth("Mark", "Catherine");
console.log(mon.getOrderOfSuccession());
            >  ["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom, "Celine", "Peter"]              <---- N-ary tree

mon.death("Jake");
mon.death("Jane");

console.log(mon.getOrderOfSuccession());
            > [ "Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"]





--------------------------------------------------------------------------------------------------------------
  -------------------------------------------- Logical Approach --------------------------------------------
--------------------------------------------------------------------------------------------------------------
N-ary Tree

            Binary Tree 
                leftChild = {
                    leftChild={}
                    right={child}
                }
                rightChild = {
                    leftChild={}
                    rightChild={}
                }


                N=ary Tree{
                    val: "Something"
                    children: [                 <---- we want to utilize array because it is going to keep order
                        kid1:{
                            val:"something2"
                            children: []
                        },
                        kid2:{
                            val:"something2"
                            children: []
                        }
                    ]
                }


                in which order we are going to implement order of succession?
                    - names in correct order
                    - include case of death

                DFS - 
                What about order:
                    pre order  <----- correct traversal!
                    in order
                    post order


                Case of death? 
                    - simple if statement base on the life boolean




                How to quickly traverse in that case:
                    mon.birth("Tom", "Jake");

                        - internal hash map
*/
