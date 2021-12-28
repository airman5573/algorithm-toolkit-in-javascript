function range(_from, to) {
  let N = to + 1, i = _from, arr = Array(N);
  while (i < N) {
    arr[i++] = i;
  }
  return arr;
}

export default range;