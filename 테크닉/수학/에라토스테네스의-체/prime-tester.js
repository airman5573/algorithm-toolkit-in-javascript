function generatePrimeTester(n) {
  const [IM_PRIME, IM_NOT_PRIME] = [1, 0];
  // 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
  n = n + 1 // 이렇게 하면 소수목록에서 조회할때 index - 1 안해줘도 된다
  const tester = new Array(n);
  for (let i = 0; i < n; i += 1) {
    tester[i] = IM_PRIME;
  }
  // 1은 소수가 아니기 때문에, 2부터 조사한다
  // n의 제곱근까지만 루프를 돌아도 되는 이유는 REAME.md를 참고한다
  for (let i = 2; i < parseInt(n ** 0.5, 10) + 1; i += 1) {
    if (tester[i]) {
      // 위에서 n = n + 1을 해주었기 때문에, n은 포함 안시켜도 된다.
      for (let j = i * i; j < n; j += i) {
        tester[j] = IM_NOT_PRIME;
      }
    }
  }
  return tester;
}

export default generatePrimeTester;