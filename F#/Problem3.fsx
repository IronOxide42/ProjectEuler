//Problem 3 -- Largest Prime Factor
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

let rec sieve = function
    | (p::xs) -> p :: sieve [ for x in xs do if x % p > 0L then yield x ]
    | []      -> []

let rec LargestPrimeFactorHelper value sieve =
    if (List.isEmpty sieve) then value
    elif sieve.Head = value then sieve.Head
    else LargestPrimeFactorHelper value sieve.Tail

let LargestPrimeFactor value =
    LargestPrimeFactorHelper value (List.rev (sieve [2L..value]))

let Problem3 value =
    LargestPrimeFactor value

Problem3 600851475143L;;