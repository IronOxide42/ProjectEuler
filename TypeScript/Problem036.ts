const IsPalindromic = (value, base) => (value.toString(base) === value.toString(base).split("").reverse().join(""));

let sum = 0;

// Only need odd numbers -- no even binary number is palindromic
for (let i = 1; i < 1000000; i += 2) {
    if (IsPalindromic(i, 2) && IsPalindromic(i, 10)) {
        sum += i;
    }
}

console.log(sum);
