//Problem 1 -- Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//True iff the value should be summed.
//Per question, True iff value is a multiple of 3 or 5
let Qualifies value =
    value % 3 = 0 || value % 5 = 0

//Note that this is inclusive--below 1000 would call (SumUpTo 999)
let rec SumUpTo max = 
    if max=0 then 0
    elif Qualifies max then max + SumUpTo (max-1)
    else SumUpTo (max-1)

let rec Problem2 max = 
    SumUpTo (max-1)

Problem2 1000;;