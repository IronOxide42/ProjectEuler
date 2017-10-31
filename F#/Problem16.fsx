open System.Numerics

let rec power x n =
    if n = bigint(0) then bigint(1)
    elif n = bigint(1) then x
    else x * (power x (n-bigint(1)))

//Based on http://www.fssnip.net/5u/title/String-explode-and-implode
//Note the -48 is because of character encoding starting at 48
let explodeAsInt (s:string) =
    [for c in s -> ((c |> int) - 48)]

let Problem16 (n:int) =
    List.sum ((explodeAsInt) (string (power (bigint 2) (bigint n))))

Problem16 1000;;
//1366