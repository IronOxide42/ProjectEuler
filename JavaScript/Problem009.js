let problem9 = value => {
    let IsPythagorean = (a, b, c) => (a * a + b * b == c * c);

    for(let a = 1; a <= value; ++a) {
        for(let b = 1; b <= value; ++b) {
            for(let c = 1; c <= value; ++c)         {
                //Returns only the first value found
                if(IsPythagorean(a, b, c) && a + b + c == value) {
                    return a * b * c;
                }
            }
        }
    }

    //return undefined if not found
    return undefined;
};