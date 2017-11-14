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
};