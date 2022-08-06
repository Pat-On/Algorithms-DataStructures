/*
                      x - x
                    /      \
   x - x - x - x - x        x
                    \      /
                      x - x



    T - 1 step
    H - 2 steps

    1. they met at specific point - meeting point 
        meeting point is always the same for specific length of the linked list 

    2. Variable A 
        variable a is the variable which is starting from A top the first node which is
        starting the cycle 
        head < --- > node starting cycle

    3 Variable B 
        is the variable from the 
        node starting the cycle to the meeting point

    4 Variable C
        is the variable from the
        meeting point to the node starting the cycle

    5 cycle is equal
        L = b + c
        M = a + b

        T = a + b  --> tortoise distance
        H = 2(a+ b) --> hare distance 



    6 what we want to prove
            recap:  7 mod 3 = 1 
                    3 mod 4 = 3 
                    3 mod 100 = 3

        a mod L = c 

    7 proof

        2(a*b) = a + b + l * k   // representation of distance



        a mod L = (k * L - b) mod L
        a mod L = L - B
        a mod L = C  




        -----> INTERESTING REPEAT IT ALL ON PAPER! 


*/
