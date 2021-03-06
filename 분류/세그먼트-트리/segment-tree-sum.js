import SegmentTree from './segment-tree.js';

class SegmentTreeSum extends SegmentTree {
  merge(leftVal, rightVal) {
    return leftVal + rightVal;
  }

  getValueWhenOutOfRange() {
    return 0;
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