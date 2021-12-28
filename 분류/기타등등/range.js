function range(_from, to, step = 1) {
  let n = Math.floor((to - _from) / step) + 1
  let i = 0;
  const arr = Array(n);
  while (i < n) {
    arr[i] = _from + i * step;
    i += 1;
  }
  return arr;
}

export default range;