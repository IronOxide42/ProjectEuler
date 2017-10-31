let rec dividesAnyIn (x:int) (xlist:int list) =
    if (Seq.isEmpty xlist) then false//(x % xlist.Head = 0)
    elif (xlist.Head % x = 0) then true
    else (dividesAnyIn x xlist.Tail)

let rec Filter (x:int list) =
    if (Seq.length x = 1) then x
    elif (dividesAnyIn x.Head x.Tail) then (Filter x.Tail)
    else x.Head::(Filter x.Tail)

let rec dividesAllIn (xlist:int list) (x:int) =
    if (Seq.isEmpty xlist) then true
    elif (x % xlist.Head = 0) then (dividesAllIn xlist.Tail x)
    else false

let Problem5 xlist =
    let rec problem5Helper x factors =
        if (dividesAllIn factors x) then x
        else (problem5Helper (x+1) (Filter factors))
    problem5Helper 1 xlist

Problem5 [1..20];;