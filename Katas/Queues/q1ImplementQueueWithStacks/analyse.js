/*
    Implement the class Queue using stacks.

    The queue methods you need to implement are:
    - enqueue - append a value to the end of the queue
    - dequeue - remove the value at the start of the queue
    - peek - return the value at the start of the queue
    - empty - return a boolean value of whether the queue is empty or not


    Step 1: Verify the Constraints

    Do the queue methods we have to implement need to perform at the same time and space complexity of a real queue?
        - queues and stack operate on o(1) space complexity, but in this exercise we can not implement it

        No, but they should be as performant as possible.

    Step 2: Write out some test cases
        we do not have exactly test cases because this question is about implementing the class

    
    Step 3: Figure out a solution without code

    Inserting - the same
        queue: [1, 2, 3, 4, 5]

        stack: [1, 2, 3, 4, 5]

    Removing
        queue: [_, 2, 3, 4, 5]
                1

        stack: [1, 2, 3, 4, _]
                            5

    So we need to reverse it before operations to force Stack to work like a queue

    We need to run two stacks
*/
