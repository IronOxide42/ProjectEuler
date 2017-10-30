let rec sumOfSquaresTo x =
    if x = 1 then 1
    else (x * x) + (sumOfSquaresTo (x-1))

let squareOfSumTo x =
    let rec sumTo x =
        if x = 1 then 1
        else x + (sumTo (x-1))
    (sumTo x) * (sumTo x)

let Problem6 =
    abs ((sumOfSquaresTo 100) - (squareOfSumTo 100))

Problem6;;