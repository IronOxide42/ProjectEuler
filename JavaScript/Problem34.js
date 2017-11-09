
let factCache = [1]

let fact = n => {
    if(factCache[n] != undefined) {
        return factCache[n]
    }
    else {
        factCache[n] = n * fact(n - 1)
        return factCache[n]
    }
}

let sumOfFactorialOfDigits = n => {
    let digits = (n.toString()).split('')
    let sum = 0
    for(let i = 0; i < digits.length; ++i) {
        sum += fact(parseInt(digits[i]))
    }
    return sum
}

let sum = 0

//Note: sumOfFactorialDigits(99999999) makes a 7-digit sum,
//so 9!*7 is the upper bound, which is 2540161
for(let i = 10; i <= 2540161; ++i){
    if(sumOfFactorialOfDigits(i) == i) {
        sum += i
    }
}

console.log(sum)