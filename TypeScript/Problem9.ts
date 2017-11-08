/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

let IsPythagorean = (a, b, c) => (a*a + b*b == c*c)

let value = 1000
let answer

for(let a = 1; a <= value; ++a)
{
    for(let b = 1; b <= value; ++b)
    {
        for(let c = 1; c <= value; ++c)
        {
            if(IsPythagorean(a,b,c) && a+b+c==value)
            {
                answer = a*b*c
            }
        }
    }
}

console.log(answer)
//31875000