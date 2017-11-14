let problem4 = digits => {
    const IsPalindromic = value => (value.toString() === value.toString().split('').reverse().join(''));

    let max = 0;

    for(let i = Math.pow(10, digits - 1); i < Math.pow(10, digits); i++) {
        for(let j = Math.pow(10, digits - 1); j < Math.pow(10, digits); j++) {
            if(i * j > max && IsPalindromic(i * j)) {
                max = i * j;
            }
        }
    }

    return max;
};