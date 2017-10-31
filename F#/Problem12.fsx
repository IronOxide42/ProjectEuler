let rec GetTriangleNumber (index:bigint) =
    if (index = (bigint 1)) then (bigint 1)
    else (index + (GetTriangleNumber (index-(bigint 1))))

let GetDivisors dividend =
    let rec getDivisorsHelper (dividend:bigint) (curDivisor:bigint) =
        if curDivisor = (bigint 1) then [(bigint 1);]
        elif (dividend % curDivisor = (bigint 0)) then curDivisor::(getDivisorsHelper dividend (curDivisor - (bigint 1)))
        else getDivisorsHelper dividend (curDivisor-(bigint 1))
    getDivisorsHelper dividend dividend

let rec GetTriangleNumberWithOver divisorCount =
    let rec getTriangleNumberWithOverHelper (divisorCount:bigint) (index:bigint) =
        if bigint(index |> GetTriangleNumber |> GetDivisors |> Seq.length)  > divisorCount then (GetTriangleNumber index)
        else getTriangleNumberWithOverHelper divisorCount (index + (bigint 1))
    getTriangleNumberWithOverHelper divisorCount (bigint 1)

GetTriangleNumberWithOver (bigint 500);;