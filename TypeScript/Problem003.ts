/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function problem3(numberToFactor: number): number {
    let currentCandidate = Math.ceil(Math.sqrt(numberToFactor));

    const IsPrime = (n) => {
        if (n === 1) { return false; }
        if (n === 2) { return true; }
        if (n % 2 === 0) { return false; }

        const boundary = Math.ceil(Math.sqrt(n));

        for (let i = 3; i <= boundary; i += 2) {
            if (n % i === 0) { return false; }
        }
        return true;
    };

    while (!(IsPrime(currentCandidate) && numberToFactor % currentCandidate === 0)) {
        --currentCandidate;
    }

    return currentCandidate;
}
