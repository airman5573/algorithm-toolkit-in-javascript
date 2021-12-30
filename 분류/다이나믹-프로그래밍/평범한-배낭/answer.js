function knapsack(wv, totalK) {
  wv.sort((a, b) => a[0] - b[0]); // 무게를 기준으로 정렬한다
  // 왜 wv.length + 1인가?
  // index가 음수가 되는 경우를 방지하기 위해서 (아래 루프 참조, i가 1부터 시작한다)
  const table = [...new Array(wv.length + 1)].map(_ => new Array(totalK + 1).fill(0));
  for (let i = 1; i < table.length; i += 1) {
    const [w, v] = wv[i - 1];
    for (let k = 1; k < totalK + 1; k += 1) {
      if (w > k) { // 가방에 못넣을때
        table[i][k] = table[i - 1][k]; // k안에 넣을 수 있는 최대 가치를 넣는다
      } else { // 가방에 넣을 수 있을떄
        // 이번 물건을 안넣었을때의 최대 vs 이번 물건을 넣고 + 남는 무게에 뭔가 더 넣었을때
        table[i][k] = Math.max(table[i - 1][k], v + table[i - 1][k - w]);
      }
    }
  }
  return table.reduce((acc, cur) => {
    return Math.max(acc, cur[cur.length - 1]);
  }, 0);
}

let fs = require('fs');
const live = '/dev/stdin';
const test = 'test.txt';
let [firstLine, ...data] = fs.readFileSync(live).toString().trim().split('\n');
const [n, k] = firstLine.split(' ').map(Number);
const wv = new Array(data.length);
for (let i = 0; i < data.length; i += 1) {
  wv[i] = data[i].split(' ').map(Number);
}
console.log(knapsack(wv, k));