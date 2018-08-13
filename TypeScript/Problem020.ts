import bigint from 'big-integer';

const fact = (n) => {
    let factorial = bigint(1);
    for (let i = 1; i <= n; ++i) {
        factorial = factorial.multiply(i);
    }
    return factorial;
};

const sumOfDigits = (n) => {
    const digits = (n.toString()).split('');
    let sum = 0;
    for (const digit of digits) {
        sum += parseInt(digit, 10);
    }
    return sum;
};

console.log(sumOfDigits(fact(100)));
