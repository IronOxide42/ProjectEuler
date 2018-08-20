let pentagonal n = n * (3 * n - 1) / 2

let isPentagonal n =
    let rec isPentagonalHelper n index =
        if pentagonal(index) = n then true
        elif index = n then false
        else isPentagonalHelper n (index+1)
    isPentagonalHelper n 1    

let limit = 1

let testPentagonals limit =
    let rec testPentagonalsHelper n index =
        if isPentagonal (n + index) && isPentagonal (n - index) then index
        elif n = index then n
        else (testPentagonalsHelper n (index + 1))
    testPentagonalsHelper limit 1

printfn (testPentagonals limit)