let rec Collatz seed =
    if seed = 1L then [1L;]
    elif seed % 2L = 0L then seed::(Collatz (seed/2L))
    else seed::(Collatz ((3L*seed)+1L))

let range = [1L..1000000L]
let mutable maximum = 1L

for i in range do
    if (Seq.length (Collatz i)) > (Seq.length (Collatz maximum)) then maximum <- i

printf "%i" maximum