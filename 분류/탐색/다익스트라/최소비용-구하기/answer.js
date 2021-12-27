import DirectedGraphFactory from '../../../기타등등/directed-graph-factory.js';
import Dijkstra from '../dijkstra-algorithm.js';

let fs = require('fs');
const { start } = require('repl');
const live = '/dev/stdin';
const test = 'test.txt';
const input = fs.readFileSync(live).toString().trim().split('\n');
const n = parseInt(input[0], 10);
const m = parseInt(input[1], 10);
const factory = new DirectedGraphFactory();
for (let i = 0; i < m; i += 1) {
  const [startNode, endNode, distance] = input[i+2].split(' ');
  factory.add(startNode, endNode, parseInt(distance, 10));
}
const [startNode, endNode] = input[m+2].split(' ');
const graph = factory.generate();
const dijkstra = new Dijkstra(graph, startNode, endNode);
const shortestDistance = dijkstra.bfs().shortestDistance();
console.log(shortestDistance);