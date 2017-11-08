let Collatz = seed => {
    if(seed < 1){
        return [] //sequence only exists at or above 1
    }

    let collatz = [seed]
    let cur = seed

    while(cur > 1) {
        cur = (cur % 2 === 0)
            ? cur/2 //cur is even
            : (3*cur) + 1 //cur is odd
        collatz.push(cur)
    }
    return collatz
}

let maximum = 1
let collatzMaxLength = Collatz(maximum).length

for(let i = 1; i < 1000000; ++i) {
    if(Collatz(i).length > collatzMaxLength) {
        maximum = i
        collatzMaxLength = Collatz(maximum).length
    }
}

console.log(maximum)