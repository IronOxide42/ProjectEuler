let rec fibonacci n =
    if n < (bigint 1) then (bigint 0)
    elif n = (bigint 1) then (bigint 1)
    elif n = (bigint 2) then (bigint 1)
    else (fibonacci (n-(bigint 1))) + (fibonacci (n-(bigint 2)))

let Problem25 (digits) =
    let rec problem25Helper (digits) index =
        if (fibonacci index) / (pown (bigint 10) digits) < (bigint 1) && (fibonacci index) / (pown (bigint 10) (digits-1)) > (bigint 0) then index
        else problem25Helper digits (index+(bigint 1))
    problem25Helper digits (bigint 1)

Problem25 20;;