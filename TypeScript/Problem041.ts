let min = 123456789;

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
    let strN = n.toString();

    for(let i = 1; i < strN.length+1; ++i) {
        if(!strN.includes(i.toString())) {
            return false;
        }
    }

    return true;
}

for(let i = 987654321; i > min; --i) {
    if(isPrime(i) && isPandigital(i)) {
        console.log(i)
        break;
    }
}