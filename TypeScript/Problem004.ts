/*

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function problem4(numberOfDigits: number): number {
    const IsPalindromic = (value) => (value.toString() === value.toString().split("").reverse().join(""));

    let max = 0;

    for (let i = Math.pow(10, numberOfDigits - 1); i < Math.pow(10, numberOfDigits); i++) {
        for (let j = Math.pow(10, numberOfDigits - 1); j < Math.pow(10, numberOfDigits); j++) {
            if (i * j > max && IsPalindromic(i * j)) {
                max = i * j;
            }
        }
    }

    return max;
}

problem4(3); // ?
