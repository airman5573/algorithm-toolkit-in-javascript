class SegmentTree {
  constructor(numArr) {
    this.numArr = numArr;
    this.tree = new Array(numArr.length * 4); // 최대 길이가 배열길이 x 4보다는 작다.
    this.build();
  }
  
  merge(leftVal, rightVal) {}

  build() {
    const _build = (node, range) => {
      const [left, right] = range;
      // 끝점에 다달았을때 값을 집어넣는다
      if (left === right) {
        return this.tree[node] = this.numArr[left];
      }
      const mid = Math.floor((left + right)/2);
      const [leftChildNode, rightChildNode] = [node * 2 + 1, node * 2 + 2];
      const leftVal = _build(leftChildNode, [left, mid]);
      const rightVal = _build(rightChildNode, [mid + 1, right]);
      return this.tree[node] = this.merge(leftVal, rightVal);
    };
    _build(0, [0, this.numArr.length - 1]);
  }
}

export default SegmentTree;