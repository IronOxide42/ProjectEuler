let digitalSum = n => {
    let strn = n.toString()
    let sum = 0
    for(let digit of strn) {
        sum += parseInt(digit)
    }
    return sum
}

let maxA = 1
let maxB = 1
let max = 1

for(let a = 1; a < 100; ++a) {
    for(let b = 1; b < 100; ++b) {
        if (digitalSum(Math.pow(a, b)) > max) {
            maxA = a
            maxB = b
            max = digitalSum(Math.pow(a, b))
        }
    }
}

console.log(maxA)
console.log(maxB)
console.log(max)