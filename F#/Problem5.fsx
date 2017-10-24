open FSharp.Core

//http://www.fssnip.net/7D/title/Prime-numbers-Sieve-of-Eratosthenes
let isPrime n =
    match n with
    | _ when n > 3 && (n % 2 = 0 || n % 3 = 0) -> false
    | _ ->
        let maxDiv = int(System.Math.Sqrt(float n)) + 1
        let rec f d i = 
            if d > maxDiv then 
                true
            else
                if n % d = 0 then 
                    false
                else
                    f (d + i) (6 - i)     
        f 5 2
//End snippet

let Factors = [1..20]

let PrimesIn factors =
    query {
        for factor in factors do
        where (isPrime factor)
        select factor
    }

let Product factors = (PrimesIn factors) |> Array.reduce (*)

Product Factors;;