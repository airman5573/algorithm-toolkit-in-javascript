// arr는 오름차순으로 정렬되어 있어야 합니다
function binarySearch(arr, target) {
  let [left, right, ans] = [0, arr.length - 1, 0];
  while (left <= right) {
    const mid = Math.floor((right + left)/2);
    if (target <= arr[mid]) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}