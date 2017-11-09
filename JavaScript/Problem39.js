/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
{20,48,52}, {24,45,51}, {30,40,50}
For which value of p ≤ 1000, is the number of solutions maximised?
*/

let solutions = [ [] ];
let limitP = 1000;
let maxP = 0;

let isRightTriangle = triangle => (triangle.a * triangle.a + triangle.b * triangle.b == triangle.c * triangle.c);
let perimiter = triangle => (triangle.a + triangle.b + triangle.c);

//Populate solutions
for(let p = 1; p <= limitP; ++p) {
    solutions.push([]);
    for(let a = 1; a <= p; ++a) {
        for(let b = 1; b <= p - a; ++b) {
            for(let c = 1; c <= p - a - b; ++c) {
                let triangle = { a: a, b: b, c: c };
                if(isRightTriangle(triangle) && perimiter(triangle) == p) {
                    solutions[p].push(triangle);
                }
            }
        }
    }
    maxP = (solutions[p].length > solutions[maxP].length) ? p : maxP;
}

console.log(maxP);
console.log(solutions[maxP]);