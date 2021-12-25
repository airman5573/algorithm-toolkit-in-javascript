function gcd(_a, _b) {
  let [a, b] = [_a, _b].sort((a, b) => a - b);
  // 나머지(r)가 0이되면 멈추는데, 나머지가 b에 들어가니까, b가 0보다 클때까지만 실행한다
  while (b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a; // 마지막에 b = a로 되면서 끝나니까 a를 리턴해준다
}

function lcm(a, b) {
  const g = gcd(a, b);
  return a * b / g;
}