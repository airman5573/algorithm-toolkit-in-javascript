import range from '../../../기타등등/range.js';
import combination from '../combination.js';

let fs = require('fs');
const live = '/dev/stdin';
const test = 'test.txt';
let [n, m] = fs.readFileSync(live).toString().trim().split(' ').map(Number);
const arr = range(1, n);
const combs = combination(arr, m);
for (let i = 0; i < combs.length; i += 1) {
  console.log(combs[i].join(' '));
}