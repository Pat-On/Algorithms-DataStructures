// THINK IT OVER

////////////////#1 - Sort 10 schools around your house by distance:

// insertion sort
// because input is small and you can use something very simple - quick on small sorts and small space complexity
// simpla data

////////////////#2 - eBay sorts listings by the current Bid amount:

// radix or counting sort
//  bid is usualy number 1 - 50 000 even less 1 - 100 dollars
// because it is fixed length of intigers
// knowing that the sorting things are going to be always number in some range

////////////////#3 - Sport scores on ESPN
// Quick sort
// different formats and differents scores types, decimals etc
// it is going to be the most efficient but we may have the wors case,

////////////////#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort
// we can not upload entire db to memory so we have to sot it externaly
// reason: it sounds that we are not going to sort in memory, and because that data is so big I am worrying about performance
// in worse case, no meetter what I will get big O logn

////////////////#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort
// because most of the data is already sorted so I am adding just 2 additional reviews

//////////////// #6 - Temperature Records for the past 50 years in Canada
// radix or counting Sort
// if temperatures have no decimap points -50 to 40 degree

// Quick sort if decimal places
// if they have decimal numbers

//////////////// #7 - Large user name database needs to be sorted. Data is very random.
// we do not have enough information to make a decision

// merge sort - if we have enough memory and memory is not to expensive on the machine

// Quick sort - if i am not to worry about worse case and db is not to big just to save memory space

//////////////// #8 - You want to teach sorting
// Bubble sort - the simplest one
// selection sort - simple too
