//Problem 1 -- Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function problem1(value) {
    const IsMultipleOf = (value,divisor) => value % divisor === 0 ;

    let sum = 0;

    const max = value;
    const divisors = [3,5];

    for(let i = 0; i < max; i++)
    {
        let qualifies = false;
        divisors.forEach(
            function(j) { if(IsMultipleOf(i,j)) qualifies = true; }
        );
        if (qualifies)
        {
            sum += i;
        }
        
    }
    return sum;
}

function functional(value) {
    let qualifies = value => (value % 3 === 0 && value % 5 === 0);
    let sumUpTo = max =>
        (max === 0) ? 0 :
        (qualifies(max)) ? (max + sumUpTo(max-1)) :
        (sumUpTo(max-1));
    let problem2 = max => sumUpTo(max-1);
    return problem2(value)
}

let question = 1000;
console.log(problem1(question));
console.log(functional(question));

//233168