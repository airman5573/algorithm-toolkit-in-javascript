import SegmentTree from './segment-tree.js';

class SegmentTreeMin extends SegmentTree {
  constructor(numArr, MAX) {
    super(numArr);
    this.MAX = MAX;
  }

  merge(leftVal, rightVal) {
    return Math.min(leftVal, rightVal);
  }

  getValueWhenOutOfRange() {
    return this.MAX;
  }
}

export default SegmentTreeMin;