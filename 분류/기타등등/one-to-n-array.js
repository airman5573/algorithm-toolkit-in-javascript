// 출처 : https://stackoverflow.com/a/33352604/9279003

function createOneToNArray(n) {
  //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return Array.from({length: 10}, (_, i) => i + 1)
}

export default createOneToNArray;