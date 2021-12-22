import SegmentTree from './segment-tree.js';

class SegmentTreeMax extends SegmentTree {
  constructor(numArr, MIN) {
    super(numArr);
    this.MIN = MIN;
  }

  merge(leftVal, rightVal) {
    return Math.max(leftVal, rightVal);
  }

  getValueWhenOutOfRange() {
    return this.MIN;
  }
}

export default SegmentTreeMax;