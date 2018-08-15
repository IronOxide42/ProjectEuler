import {fs} from 'fs'

let GetNumericalValue = letter => {
    let charCode = letter.toLowerCase().charCodeAt(0)
    if(charCode > 96 && charCode < 123) {
        return charCode
    }
    else {
        throw new Error("InvalidArgumentException: The character entered is not a letter.");
        return 0;
    }
}

let words

fs.readFile('p042_words.txt', (err, data) => {
    if (err) throw err
    words = data
})

