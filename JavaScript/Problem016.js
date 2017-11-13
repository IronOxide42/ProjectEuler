let bigint = require('big-integer');

let value = bigint(2).pow(1000);

let str = value.toString().split('');

let ans = str.reduce((prev, c) => prev + parseInt(c), 0);

console.log(ans);