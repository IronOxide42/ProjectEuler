/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

let problem3 = product => {
    const product = 600851475143;

    let currentCandidate = Math.ceil(Math.sqrt(product));

    const IsPrime = number => {
        if(number === 1) { return false; }
        if(number === 2) { return true; }
        if(number % 2 === 0) { return false; }

        let boundary = Math.ceil(Math.sqrt(number));

        for(let i = 3; i <= boundary; i += 2) {
            if(number % i === 0) { return false; }
        }
        return true;
    };

    while(!(IsPrime(currentCandidate) && product % currentCandidate === 0)) {
        --currentCandidate;
    }

    return currentCandidate;
}

//problem3(600851475143) == 6857