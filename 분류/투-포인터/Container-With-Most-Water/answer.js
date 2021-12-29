var maxArea = function(sticks) {
  let [maxArea, start, end] = [0, 0, 0, sticks.length - 1];
  while (start < end) {
    const area = (end - start) * Math.min(sticks[start], sticks[end]);
    maxArea = Math.max(area, maxArea);
    if (sticks[start] <= sticks[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return maxArea;
};