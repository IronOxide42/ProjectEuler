open Microsoft.FSharp.Core.Option

//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

//https://stackoverflow.com/a/24404049
let rec revAcc xs acc =
    match xs with
    | [] -> acc
    | h::t -> revAcc t (h::acc)

let rev xs =
    match xs with
    | [] -> xs
    | [_] -> xs
    | h1::h2::t -> revAcc t [h2;h1] 

let reversed value = 
    value
    |> Seq.toList 
    |> rev
//END https://stackoverflow.com/a/24404049

let IsPalindromic value =
    if (Seq.toList value) = (reversed value) then true
    else false

let IsPalindromic value:string =
    if (Array.rev (Array.rev value)) = (Array.rev value) then true
    else false

