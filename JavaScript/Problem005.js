/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?
*/

let problem5 = (min, max) => {
    const MaxValueIn = values => {
        let max = values[0];
        values.forEach(value => {
            if(value > max) {
                max = value;
            }
        });
        return max;
    };

    const SmallestMultiple = values => {
        for(let i = MaxValueIn(values); true; i += MaxValueIn(values)) {
            let found = true;
            values.forEach(value => {
                if(i % value != 0) {
                    found = false;
                }
            });
            if(found) {
                return i;
            }
        }
    };

    let values = [];
    for(let i = min; i < max; ++i) {
        values.push(i);
    }

    let smallestMultiple = SmallestMultiple(values);

    return smallestMultiple;
}

//problem5(1, 20) == 232792560