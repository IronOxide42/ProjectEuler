let problem8 = (series, factors) => {
    let stringProduct = strNumber => {
        let product = 1;
        for(let i = 0; i < strNumber.length; ++i) {
            product *= parseInt(strNumber[i]);
        }
        return product;
    };

    let MaxAdjacentProduct = (series, adjacencyLength) => {
        let maxProduct = 0;

        for(let i = 0; i <= (series.length - adjacencyLength); ++i) {
            let subnumber = series.substring(i, i + adjacencyLength);

            let stringProducts = stringProduct(subnumber);
            if(stringProducts > maxProduct) {
                maxProduct = stringProducts;
            }
        }

        return maxProduct;
    };

    return MaxAdjacentProduct(series, factors);
};