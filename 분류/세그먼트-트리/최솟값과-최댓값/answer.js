import SegmentTreeMin from '../segment-tree-min.js';
import SegmentTreeMax from '../segment-tree-max.js';

let fs = require('fs');
const test = './test.txt';
const live = '/dev/stdin';
let input = fs.readFileSync(live).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = new Array(N);
for (let i = 1; i < N + 1; i += 1) {
  arr[i] = parseInt(input[i], 10);
}
const segmentTreeMin = new SegmentTreeMin(arr, 10**9 + 1);
const segmentTreeMax = new SegmentTreeMax(arr, -1);
for (let i = N + 1; i < 1 + N + M; i += 1) {
  const range = input[i].split(' ').map(Number);
  const min = segmentTreeMin.query(range);
  const max = segmentTreeMax.query(range);
  console.log(`${min} ${max}`);
}
