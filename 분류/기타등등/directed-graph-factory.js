class DirectedGraphFactory {
  constructor() {
    this._graph = {};
  }
  generate() {
    return this._graph;
  }
  add(startNode, endNode, cost) {
    if (!this._graph[startNode]) {
      this._graph[startNode] = [[endNode, cost]];
      return;
    }
    this._graph[startNode].push([endNode, cost]);
  }
}

export default DirectedGraphFactory;