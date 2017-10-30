let rec GetTriangleNumber (index:uint64) =
    if (index = 1UL) then 1UL
    else (index + (GetTriangleNumber (index-1UL)))

let GetDivisors dividend =
    let rec getDivisorsHelper (dividend:uint64) (curDivisor:uint64) =
        if curDivisor = 1UL then [1UL;]
        elif (dividend % curDivisor = 0UL) then curDivisor::(getDivisorsHelper dividend (curDivisor-1UL))
        else getDivisorsHelper dividend (curDivisor-1UL)
    getDivisorsHelper dividend dividend

let rec GetTriangleNumberWithOver divisorCount =
    let rec getTriangleNumberWithOverHelper (divisorCount:uint64) (index:uint64) =
        if uint64(Seq.length (GetDivisors (GetTriangleNumber index))) > divisorCount then (GetTriangleNumber index)
        else getTriangleNumberWithOverHelper divisorCount (index+1UL)
    getTriangleNumberWithOverHelper divisorCount 1UL

GetTriangleNumberWithOver 500UL;;