// 출처 : https://stackoverflow.com/a/33352604/9279003

function zeroUntilNArray(n) {
  //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return Array.from(Array(10).keys());
}

export default zeroUntilNArray;