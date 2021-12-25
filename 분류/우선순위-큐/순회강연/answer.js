import PriorityQueue from '../priority-queue.js';

let fs = require('fs');
const live = '/dev/stdin';
const test = 'test.txt';
const input = fs.readFileSync(live).toString().trim().split('\n');
const n = parseInt(input[0], 10);
if (n === 0) {
  console.log(0);
  return;
}
const minHeap = new PriorityQueue((a, b) => a < b);
const pdArr = new Array(n);
for (let i = 0; i < n; i += 1) {
  pdArr[i] = input[i + 1].split(' ').map(Number);
}
pdArr.sort((a, b) => a[1] - b[1]); // 기한이 작은 강연순으로 정렬한다
minHeap.push(pdArr[0][0]); // 맨처음에 할 강연의 강의료를 넣는다

let day = 1;
for (let i = 1; i < n; i += 1) {
  const [p, d] = pdArr[i];
  // 지금까지 2일차까지의 강연료에 대해서 다루다가, 3일차 강연이 나타면
  if (day < d) {
    // 우선 하겠다고 하는거야. 이거는 기한이 하루 추가 되었으니까, 이전까지와는 상관 없이 우선 추가!
    minHeap.push(p);
    day += 1;
  }
  // 현재까지의 1일차 강연료의 최소가 2만원인데
  // 새로 들어온 강연도 1일차에 해야 하는건데, 강연료가 5만원이다?
  else if (minHeap.peek() < p) {
    // 바로 강연료 제일 작은거 포기 하고, 이거 넣는다
    // 그런데 1일차 강연이 2개 잡힐수도 있는거 아닌가요? 강연료가 제일 작은 강연을 빼는거지, 같은 1일이 기한인 강연을 빼는건 아니잖아요
    // => 그래서 기한이 작은 강연 순으로 정렬을 했잖아. 위에서 여기서 pop되는건 최소, 현재 d와 같거나 작은놈인거야!
    minHeap.pop();
    minHeap.push(p);
  }
}

console.log(minHeap.heap().reduce((acc, cur) => acc += cur, 0));