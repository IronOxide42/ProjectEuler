//Problem 1 -- Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

let problem1 = value => {
    const IsMultipleOf = (value, divisor) => value % divisor === 0; 

    let sum = 0;

    const max = value;
    const divisors = [ 3, 5 ];

    for(let i = 0; i < max; i++) {
        //If at least one item in divisors divides i
        if(divisors.reduce((prev, cur) => (prev || (IsMultipleOf(i, cur))), false)) {
            sum += i;
        }
    }
    return sum;
};