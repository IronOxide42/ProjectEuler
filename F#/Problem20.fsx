let rec fact n =
    if n = bigint(1) then bigint(1)
    else n * (fact (n-(bigint 1)))

//Based on http://www.fssnip.net/5u/title/String-explode-and-implode
//Note the -48 is because of character encoding starting at 48
let explodeAsInt (s:string) =
    [for c in s -> ((c |> int) - 48)]

let Problem20 (n:bigint) =
    List.sum ((explodeAsInt) (string (fact n)))

Problem20 (bigint 100);;
