var trap = function(blockHeights) {
  let water = 0;
  let [leftPointer, rightPointer] = [0, blockHeights.length - 1];
  let [leftBoundary, rightBoundary] = [blockHeights[0], blockHeights[blockHeights.length - 1]];
  while (leftPointer < rightPointer) {
    const [currentLeftHeight, currentRightHeight] = [blockHeights[leftPointer], blockHeights[rightPointer]];
    // 오른쪽에서 따악 버티고 있는 상황
    // 편하게 오른쪽으로 가주면서 물의 양을 구해주면 된다
    if (currentLeftHeight <= currentRightHeight) {
      leftBoundary = Math.max(leftBoundary, currentLeftHeight);
      water += leftBoundary - currentLeftHeight;
      leftPointer += 1;
    }
    // 왼쪽에서 따악 버티고 있는 상황
    // 편하게 왼쪽으로 가주면서 물의 양을 구해주면 된다
    else {
      rightBoundary = Math.max(rightBoundary, currentRightHeight);
      water += rightBoundary - currentRightHeight;
      rightPointer -= 1;
    }
  }
  return water;
};
