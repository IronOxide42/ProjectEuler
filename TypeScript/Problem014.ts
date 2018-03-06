/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

let Collatz = (seed) => {
    if (seed < 1) {
        return []; // sequence only exists at or above 1
    }

    const collatz = [ seed ];
    let cur = seed;

    while (cur > 1) {
        cur = (cur % 2 === 0)
            ? cur / 2 // cur is even
            : (3 * cur) + 1; // cur is odd
        collatz.push(cur);
    }
    return collatz;
};

let maximum = 1;
let collatzMaxLength = Collatz(maximum).length;

for (let i = 1; i < 1000000; ++i) {
    if (Collatz(i).length > collatzMaxLength) {
        maximum = i;
        collatzMaxLength = Collatz(maximum).length;
    }
}
