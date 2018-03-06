/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

function problem10(maxExclusive) {
    function IsPrime(n) {
        if (n <= 1 || n % 2 === 0) {
            return false;
        }
        if (n === 2) {
            return true;
        }

        const boundary = Math.floor(Math.sqrt(n));

        for (let i = 3; i <= boundary; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    let value = 0;

    for (let i = 0; i <= maxExclusive; ++i) {
        if (IsPrime(i)) {
            value += i;
        }
    }

    return value;
}
