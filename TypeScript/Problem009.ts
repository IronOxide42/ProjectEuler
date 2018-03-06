/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

function problem9(value) {
    const IsPythagorean = (a, b, c) => (a * a + b * b === c * c);

    for (let a = 1; a <= value; ++a) {
        for (let b = 1; b <= value; ++b) {
            for (let c = 1; c <= value; ++c)         {
                // Returns only the first value found
                if (IsPythagorean(a, b, c) && a + b + c === value) {
                    return a * b * c;
                }
            }
        }
    }

    // return undefined if not found
    return undefined;
}
