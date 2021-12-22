class SegmentTree {
  constructor(numArr) {
    this.numArr = numArr;
    this.tree = new Array(numArr.length * 4); // 최대 길이가 배열길이 x 4보다는 작다.
    this.build();
  }
  
  merge(leftVal, rightVal) {}

  getValueWhenOutOfRange() {}

  query(section) {
    const _query = (node, range) => {
      const [left, right] = range;
      if (sectionRight < left || right < sectionLeft) {
        return this.getValueWhenOutOfRange();
      }
      if (sectionLeft <= left && right <= sectionRight) {
        // 범위에 포함되면 바로 값을 줘버린다. top down방식이라서 지금 줘도 된다. 더 내려가 봤다 의미없다.
        return this.tree[node];
      }
      // 사이에 걸터 있으면 왼쪽 오른쪽 나눠서 구해준다.
      const mid = Math.floor((left + right) / 2);
      const [leftChildNode, rightChildNode] = [node * 2 + 1, node * 2 + 2];
      const leftVal = _query(leftChildNode, [left, mid]);
      const rightVal = _query(rightChildNode, [mid+1, right]);
      return this.merge(leftVal, rightVal);
    };
    const [sectionLeft, sectionRight] = section;
    return _query(0, [0, this.numArr.length-1]);
  }

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