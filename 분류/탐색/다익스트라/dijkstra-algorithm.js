class Dijkstra {
  constructor(graph, startNode, endNode) {
    this._startNode = startNode;
    this._endNode = endNode;
    this._graph = graph; // format : { 'A' : [['B', 10], ['C', 15]], 'B': [['A', 10]], 'C': [['A', 15]] }
    const keys = Object.keys(this._graph);
    this.initShortestDistance(keys);
    this.pq = new PriorityQueue((a, b) => a[1] < b[1]);
  }

  initShortestDistance(nodes) {
    this._shortestDistance = nodes.reduce((acc, cur) => {
      acc[cur] = Number.MAX_SAFE_INTEGER;
      if (cur === this._startNode) {
        acc[cur] = 0;
      }
      return acc;
    }, { [this._endNode]: Number.MAX_SAFE_INTEGER });
    this._shortestDistance[this._startNode] = 0; // 처음 위치는 0
  }

  bfs() {
    this.pq.push([this._startNode, 0]);
    while (this.pq.size() > 0) {
      const [e, d] = this.pq.pop(); // distance는 우선순위를 위한것일뿐!
      // 연결이 없을수도 있다
      if (!this._graph[e]) {
        continue;
      }
      // 이미 최단거리는 구해 졌는데, queue에는 e까지 가는 다양한 거리들(d)이 있어서, 걸러주는거다
      // visited와 동일한 역할을 한다
      if (this._shortestDistance[e] <= d) {
        continue;
      }
      const s = e;
      this._graph[s].forEach((node) => {
        const [connectedNode, distance] = node;
        const nextDistance = this._shortestDistance[s] + distance;
        // 위에서 검사 했는데, 또 검사 합니까?
        // 여기는 최단거리를 찾는 코드입니다. 다만 nextDistance가 100일때, 99일때, 98일때,,, 업데이트 되면서 동시에 (옮지 않은 값들이) queue에 쌓이기 때문에
        // 위에서 저렇게 검사를 해준겁니다.
        if (this._shortestDistance[connectedNode] <= nextDistance) {
          return;
        }
        this._shortestDistance[connectedNode] = nextDistance;
        this.pq.push([connectedNode, nextDistance]);
      });
    }
    return this;
  }

  moveInfo(start, end, distance) {
    return { s: start, e: end, d: distance };
  }
}

export default Dijkstra;