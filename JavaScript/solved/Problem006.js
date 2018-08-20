let problem6 = factor => {
    let sumOfSquares = 0;
    let squareOfSum = 0;

    for(let i = 1; i <= factor; ++i) {
        sumOfSquares += i * i;
        squareOfSum += i;
    }
    squareOfSum *= squareOfSum;

    let diff = squareOfSum - sumOfSquares;

    return diff;
};
