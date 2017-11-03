//Problem 1 -- Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

function IsMultipleOf(value, divisor) {
    return value % divisor == 0;
}

let sum = 0;

const max = 1000;
const divisors = [3,5];

for(let i = 0; i < max; i++)
{
    let qualifies = false;
    divisors.forEach(
        function(j) {
            if(IsMultipleOf(i,j))
            {
                qualifies = true;
            }
        }
    );
    if (qualifies)
    {
        sum += i;
    }
    
}

console.log(sum);
//233168