/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

//https://stackoverflow.com/a/15743238
let IsPrime = number => {
    if (number <= 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    let boundary = Math.floor(Math.sqrt(number));

    for (let i = 3; i <= boundary; i += 2)
    {
        if (number % i == 0) return false;
    }

    return true;
}

let value = 0;

for(let i = 0; i<=2000000; ++i)
{
    if(IsPrime(i))
    {
        value += i;
    }
}

console.log(value);
//142913828922