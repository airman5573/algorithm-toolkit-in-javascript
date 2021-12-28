function range(_from, to) {
  let N = to, i = _from, arr = Array(N);
  while (i < N) {
    arr[i++] = i;
  }
  return arr;
}

export default range;