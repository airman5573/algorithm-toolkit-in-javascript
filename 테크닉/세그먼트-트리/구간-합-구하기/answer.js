import SegmentTreeSum from '../segment-tree-sum';

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [CHANGE, GETSUM] = [1, 2];
const [N, M, K] = input[0].split(' ').map(Number);
const arr = new Array(N);
for (let i = 0; i < N; i += 1) {
  arr[i] = parseInt(input[i+1], 10);
}
const segmentTree = new SegmentTreeSum(arr);
for (let i = N + 1; i < N + M + K + 1; i += 1) {
  const [a, b, c] = input[i].split(' ').map(Number);
  if (a === CHANGE) {
    segmentTree.update(b - 1, c);
  } else {
    console.log(segmentTree.query([b-1, c-1])); 
  }
}
