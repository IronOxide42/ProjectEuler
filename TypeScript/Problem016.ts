import bigint from 'big-integer';

const value = bigint(2).pow(1000);

const str = value.toString().split('');

const ans = str.reduce((prev, c) => prev + parseInt(c, 10), 0);

console.log(ans);
