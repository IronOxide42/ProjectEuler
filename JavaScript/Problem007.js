let problem7 = index => {
    let IsPrime = number => {
        if (number <= 1) {return false;}
        if (number == 2) {return true;}
        if (number % 2 == 0) {return false;}

        var boundary = Math.floor(Math.sqrt(number));

        for (let i = 3; i <= boundary; i += 2) {
            if (number % i == 0) {return false;}
        }

        return true;
    };

    let curIndex = 0;
    for(let i = 0; true; ++i) {
        if(IsPrime(i)) {
            ++curIndex;
        }
        if(curIndex == index) {
            return i;
        }
    }
};