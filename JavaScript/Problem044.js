//Calculates the pentagonal at the index n
const pentagonal = (n) => ((n * (3*n-1)) / 2)

//Tests if n is pentagonal
const isPentagonal = n => {
    const isPentagonalHelper = (n, i) => {
        if(pentagonal(i) == n) {
            return true
        }
        if(i == n) {
            return false
        }
        return isPentagonalHelper(n, i++)
    }

    return isPentagonalHelper(n, 1)
}

let pentagonals = []

//Highest index tested
let limit = 10

for(let i = 1; i <= limit; ++i) {
    //Calculate current pentagonal
    let cur = pentagonal(i)

    //Test current pentagonal with all previous pentagonals
    for(let pentagonal in pentagonals) {
        if(isPentagonal(cur + pentagonal) && isPentagonal(cur - pentagonal)) {
            console.log(cur + ", " + pentagonal)
        }
    }

    //No combination qualifies. Push to stack and move to next
    pentagonals[i - 1] = cur
}