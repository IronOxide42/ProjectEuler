let bigint = require('big-integer')

let fact = n => {
    let factorial = bigint(1)
    for(let i = 1; i <= n; ++i) {
        factorial = factorial.multiply(i)
    }
    return factorial
}

let sumOfDigits = n => {
    let digits = (n.toString()).split('')
    let sum = 0
    for(let i = 0; i < digits.length; ++i) {
        sum += parseInt(digits[i])
    }
    return sum
}

console.log(sumOfDigits(fact(100)))