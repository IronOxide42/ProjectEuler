let problem2 = maxInclusiveValue => {
    //0-indexed
    const fib = index =>
        index === 0
            ? 1
            : index === 1
                ? 1
                : fib(index - 1) + fib(index - 2);

    let sum = 0;
    for(let i = 0; fib(i) < maxInclusiveValue; i++) {
        let value = fib(i);
        sum += value % 2 === 0
            ? value
            : 0; 
    }
}