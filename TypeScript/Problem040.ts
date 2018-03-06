let str = "0";
let product = 1;

// If the log base 10 of n is an integer, n is a power of 10
let isPowerOf = (n, base) => Number.isInteger(Math.log2(n) / Math.log2(base));

for (let i = 1; i <= 1000000; ++i) {
    str += i;
    if (isPowerOf(i, 10)) {
        product *= str.charAt(i);
    }
}

console.log(product);
