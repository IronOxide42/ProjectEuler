const fs = require('fs')

const GetNumericalValue = letter => {
    let charCode = letter.toLowerCase().charCodeAt(0)
    if(charCode > 96 && charCode < 123) {
        return charCode-96
    }
    else {
        console.log(letter)
        throw new Error("InvalidArgumentException: The character entered is not a letter.");
        return 0;
    }
}

const IsTriangleNumber = n => {
    const GetTriangleNumber = index => ((index * (index + 1)) / 2);

    for(let i = 1; n >= GetTriangleNumber(i); ++i) {
        if(GetTriangleNumber(i) == n) {
            return i;
        }
    }
    return 0;
}

fs.readFile('p042_words.txt', 'utf8', (err, data) => {
    if (err) throw err
    let words = data.split('","')

    //Trim leading quotation
    words[0] = words[0].substring(1)
    //Trim trailing quotation
    words[words.length - 1] = words[words.length - 1].substring(0, words[words.length - 1].length - 1)

    console.log(words)

    let triangleWords = []

    for(let word of words) {
        let value = 0
        for(let letter of word) {
            value += GetNumericalValue(letter)
        }
        if(IsTriangleNumber(value)) {
            triangleWords.push({word, value})
        }
    }

    console.log(triangleWords)
    console.log(triangleWords.length)
})