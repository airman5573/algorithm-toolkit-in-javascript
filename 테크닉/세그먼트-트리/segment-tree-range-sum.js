import SegmentTree from './segment-tree.js';

class SegmentTreeSum extends SegmentTree {
  merge(leftVal, rightVal) {
    return leftVal + rightVal;
  }

  getSum(section) {
    const _getSum = (node, range) => {
      const [left, right] = range;
      if (sectionRight < left || right < sectionLeft) {
        return 0; // 범위에 벗어나면 0을 돌려준다
      }
      if (sectionLeft <= left && right <= sectionRight) {
        // 범위에 포함되면 바로 값을 줘버린다. top down방식이라서 지금 줘도 된다. 더 내려가 봤다 의미없다.
        return this.tree[node];
      }
      // 사이에 걸터 있으면 왼쪽 오른쪽 나눠서 구해준다.
      const mid = Math.floor((left + right) / 2);
      const [leftChildNode, rightChildNode] = [node * 2 + 1, node * 2 + 2];
      const leftVal = _getSum(leftChildNode, [left, mid]);
      const rightVal = _getSum(rightChildNode, [mid+1, right]);
      return leftVal + rightVal;
    };
    const [sectionLeft, sectionRight] = section;
    return _getSum(0, [0, this.numArr.length-1]);
  }

  update(index, value) {
    const diff = value - this.numArr[index];
    this.numArr[index] = value;
    const _update = (node, range) => {
      const [left, right] = range;
      if (index < left || right < index) {
        return; // 범위에 포함되어 있지 않다면 더 내려갈 필요가 없다
      } else {
        this.tree[node] += diff;
        if (left == right) {
          // 말단까지 왔다면, 더 내려가면 안된다.
          // this.tree[node]를 업데이트 하고 나서 멈춰야 한다. 말단도 업데이트가 필요하기 때문.
          return;
        }
        const mid = Math.floor((left + right) / 2);
        const [leftChildNode, rightChildNode] = [node * 2 + 1, node * 2 + 2];
        _update(leftChildNode, [left, mid]);
        _update(rightChildNode, [mid+1, right]);
      }
    };
    _update(0, [0, this.numArr.length - 1]);
  }
}

export default SegmentTreeSum;