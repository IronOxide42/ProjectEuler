import bigint from 'big-integer';

const fibCache = [ bigint(1), bigint(1) ];

const fib = (n) => {
    if (fibCache[n] !== undefined) {
        return fibCache[n];
    } else {
        fibCache[n] = fib(n - 1).add(fib(n - 2));
        return fibCache[n];
    }
};

const firstTermWith = (digitCount) => {
    let curIndex = 0;
    let curValue = fib(0);
    while (curValue.divide(bigint(10).pow(digitCount - 1)).lesser(1)) {
        ++curIndex;
        curValue = fib(curIndex);
    }
    return curIndex;
};

console.log(firstTermWith(1000).toString());
// 4782
// NOTE: The above code returns 4781, because it is zero-indexed. Project Euler phrases this question as one-indexed
