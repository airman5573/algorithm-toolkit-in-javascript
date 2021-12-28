function isAllImigration(people, timeLimit, waitingTimes) {
  let maxPeople = 0n;
  for (let i = 0; i < waitingTimes.length; i += 1) {
    maxPeople += timeLimit / waitingTimes[i];
    if (maxPeople >= people) {
      return true;
    }
  }
  return false;
}

function binarySearch(people, waitingTimes) {
  let [minTime, maxTime] = [0n, waitingTimes[waitingTimes.length - 1] * people + 1n];
  let ans = 0n;
  while (minTime <= maxTime) {
    const midTime = (minTime + maxTime) / 2n;
    if (isAllImigration(people, midTime, waitingTimes)) {
      maxTime = midTime - 1n;
      ans = midTime;
    } else {
      minTime = midTime + 1n;
    }
  }
  return ans;
}

let fs = require('fs');
const live = '/dev/stdin';
const test = 'test.txt';
let [firstLine, ...data] = fs.readFileSync(live).toString().trim().split('\n');
const [n, m] = firstLine.split(' ').map(BigInt);
const waitingTimes = data.map(Number).sort((a, b) => a - b).map(BigInt);
const minTime = binarySearch(m, waitingTimes);
console.log(minTime.toString(10));