/*
Given an array of integers, return the indices of the two
numbers that add up to a given target


1 step: verify the constraints

Are all the numbers positive or can there be negatives?
- A: all numbers are positive

Are there duplicate numbers in the array
- no there are no duplicates

Will there always be a solution available?
- No, there may not always be a solution

target 25   array [1, 2, 3, 4, 5]

We may receive [] or array with only one value [1]

What do we return if there is no solution
- just return null 

Can there be multiple pairs that add up to the target?
- no, only 1 pair of numbers will add up to the target


2. Write out some test cases

[1, 3, 7, 9, 2]  t = 11   return [3, 4]
[1, 3, 7, 9, 2]  t = 25   return null
[]               t = 1    return null
[5]              t = 5    return null            
[1, 6]           t = 7    return [0, 1]

step 3: Figure out a solution without code

        0  1  2  3  4
nums = [1, 3, 7, 9, 2]   t = 11

good technique to solve it is two pointers technique

        10      11    -     1
numberToFind = target - nums[p1]

Step 4: Write out our solution code

step 5 double check for errors
- typos 
- consistence of variables names


Step 6: test our code with ours test cases

Step 7 (Execution?)

Step 8 Can we optimize our solution
*/
