/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

function problem7(index) {
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

    let curIndex = 0;
    for (let i = 0; true; ++i) {
        if (IsPrime(i)) {
            ++curIndex;
        }
        if (curIndex === index) {
            return i;
        }
    }
}
