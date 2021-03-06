// 출처 : https://stackoverflow.com/a/42919752/9279003
// 출처 코드에서 약간 수정했습니다

class PriorityQueue {
  static TOP = 0;
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  heap() {
    return [...this._heap];
  }
  peek() {
    return this._heap[PriorityQueue.TOP];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > PriorityQueue.TOP) {
      this._swap(PriorityQueue.TOP, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[PriorityQueue.TOP] = value;
    this._siftDown();
    return replacedValue;
  }
  _leftChild(i) {
    return (i << 1) + 1 // (i * 2) + 1 과 같다
  }
  _rightChild(i) {
    return (i + 1) << 1; // (i + 1) * 2 과 같다
  }
  _parent(i) {
    return ((i + 1) >> 1) - 1; // parseInt(i/2) - 1 과 같다
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > PriorityQueue.TOP && this._greater(node, this._parent(node))) {
      this._swap(node, this._parent(node));
      node = this._parent(node);
    }
  }
  _siftDown() {
    let node = PriorityQueue.TOP;
    const size = this.size();
    // 둘중 하나만 있다고 하면, leftChild만 있을것이다.
    // left부터 값이 차기 때문이다.
    while (
      (this._leftChild(node) < size && this._greater(this._leftChild(node), node)) ||
      (this._rightChild(node) < size && this._greater(this._rightChild(node), node))
    ) {
      let maxChild = this._leftChild(node);
      if (this._rightChild(node) < size && this._greater(this._rightChild(node), this._leftChild(node))) {
        maxChild = this._rightChild(node);
      }
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

export default PriorityQueue;