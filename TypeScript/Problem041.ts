let cur = 987654321;
let rev = 123456789;

let isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }

    const boundary = Math.floor(Math.sqrt(n));

    for (let i = 3; i <= boundary; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

let isPandigital = (n) => {
    // Go through digits from 1 to n.length
    for (let i = 1; i < n.length; ++i) {
        // If i is not used exactly once, return false
        if (n.toString().split("").reduce(((count, digit) => (digit === i) ? count + 1 : count), 0) !== 1) {
            return false;
        }
    }

    // All digits from 1 to i have been checked
    return true;
};

while (!(isPandigital(cur) && isPrime(cur)) && cur > rev) {
    --cur;
}

console.log(cur);
console.log(isPandigital(cur));
