# 구간 합 구하기
## 문제
[Leetcode - 1914. Cyclically Rotating a Grid](https://leetcode.com/problems/cyclically-rotating-a-grid/)

## 풀이
- [spiral-matrix 코드](../Spiral-Matrix/answer.js)를 활용해서 빙글빙글 돈다
- `y === x + 1`가 될때 테두리에 있는 블럭들을 다 모은것이다
- 돌려야할 블럭들의 주소값만 가져오고, 그 주소값에 있는 값들을 가져와서 돌린다음에 주소값에 값을 넣어주면 된다
- 값들을 rotate하는 효율적인 방법은 돌렸을때의 index를 수학적으로 계산하는것이다. 실제 `k`만큼 `shift`하고 `pop`하면 너무 오래걸린다.

## 코드
[answer.js](./answer.js)