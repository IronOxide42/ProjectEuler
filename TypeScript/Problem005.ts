/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

function problem5(min: number, max: number): number {
    function MaxValueIn(values) {
        let cur = values[0];
        for (const value of values) {
            if (value > cur) {
                cur = value;
            }
        }
        return cur;
    }

    function SmallestMultiple(values) {
        for (let i = MaxValueIn(values); true; i += MaxValueIn(values)) {
            let found = true;
            for (const value of values) {
                if (i % value !== 0) {
                    found = false;
                }
            }
            if (found) {
                return i;
            }
        }
    }

    const candidates = [];
    for (let i = min; i < max; ++i) {
        candidates.push(i);
    }

    const smallestMultiple = SmallestMultiple(candidates);

    return smallestMultiple;
}
