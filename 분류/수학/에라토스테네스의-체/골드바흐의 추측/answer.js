import generatePrimeTester from '../prime-tester.js';

let fs = require('fs');
const live = '/dev/stdin';
const test = 'test.txt';
let input = fs.readFileSync(live).toString().trim().split('\n').map(Number);
let WRONG = "Goldbach's conjecture is wrong.";
let MAX = Math.max(...input);
const primeTester = generatePrimeTester(MAX);

input.forEach((n) => {
  if (n === 0) {
    return;
  }
  for (let i = 3; i < n/2 + 1; i += 2) {
    if (primeTester[i] && primeTester[n - i]) {
      console.log(`${n} = ${i} + ${n - i}`);
      return;
    }
  }
  console.log(WRONG);
});