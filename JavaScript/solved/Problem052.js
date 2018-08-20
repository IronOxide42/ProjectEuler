let sameDigits = (n, m) => {
    let strn = n.toString()
    let strm = m.toString()
    
    for(let digit of strn) {
        if(strm.includes(digit)) {
            strm = strm.replace(digit, '')
        }
        else {
            return false
        }
    }

    if(strm == '') {
        return true
    }
    else {
        return false
    }
}

let x = 1;

while(!sameDigits(x, 2*x) || !sameDigits(x, 3*x) || !sameDigits(x, 4*x) || !sameDigits(x, 5*x) || !sameDigits(x, 6*x)) {
    ++x
}

console.log(x)