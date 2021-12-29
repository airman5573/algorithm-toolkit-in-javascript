var trap = function(blockHeights) {
  const Q = [];
  let water = 0;
  for (let i = 1; i < blockHeights.length; i += 1) {
    const [p, h] = [i, blockHeights[i]];
    const [beforeP, beforeH] = [i - 1, blockHeights[i - 1]];

    // 이전것보다 현재것이 더 낮다면
    if (h < beforeH) {
      Q.push([beforeP, beforeH]);
      continue;
    }

    // 이전것보다 현재것이 더 높다면
    if (beforeH < h) {
      let minBoundary = beforeH;
      while (Q.length > 0) {
        const [lastP, lastH] = Q[Q.length - 1];
        const width = p - lastP - 1;
        const height = Math.min(h, lastH) - minBoundary;
        water += width * height;
        if (lastH < h) {
          minBoundary = lastH;
          Q.pop();
          continue;
        } else {
          break;
        }
      }
    }
  }
  return water;
};