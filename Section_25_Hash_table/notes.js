/* 

      Objectives

- Explain what a hash table is
- define what a hashing algorithmis
- Discuss what makes a good hashing algorithm
- Understand how collsisions occur in a hash table
- Handle collisions using separate chaining or linear probing


    What is a hash table

Hash tables are used to store key-values pairs
They are like arrays but the keys are not ordered
Unlike arrays, hash tables are fast for all of the following operations:
- finding values
- adding new values
- removing values


    Why should I care

Nearly every programming language has some sort of hash table data structure
Because of their speed hash tables are very commonly used


    Hash Tables in the Wild

Python: Dictionaries
JS: Objects and Maps
Java, Go, Scala: Maps
Ruby: Hashes



    The Hash part

To implement a hash table we will be using an array
In order to look up values by key, we need a way to convert keys into valid array indices
A function that performs this task is called a hash function


                                vid 195



*/
