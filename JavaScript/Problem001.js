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
}