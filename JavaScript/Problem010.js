let problem10 = maxExclusive => {
    let IsPrime = number => {
        if (number <= 1) {return false;}
        if (number == 2) {return true;}
        if (number % 2 == 0) {return false;}

        let boundary = Math.floor(Math.sqrt(number));

        for (let i = 3; i <= boundary; i += 2) {
            if (number % i == 0) {return false;}
        }

        return true;
    };

    let value = 0;

    for(let i = 0; i <= maxExclusive; ++i) {
        if(IsPrime(i)) {
            value += i;
        }
    }

    return value;
}