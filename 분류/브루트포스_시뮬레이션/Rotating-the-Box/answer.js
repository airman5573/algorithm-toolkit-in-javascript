function right90degreeYX(height, y, x) {
  return [x, (height - 1) - y];
}

function rotateMatrix(matrix) {
  const [height, width] = [matrix.length, matrix[0].length];
  const rotatedMatrix = [...new Array(width)].map(_ => Array(height).fill(0));
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const [ry, rx] = right90degreeYX(height, y, x);
      rotatedMatrix[ry][rx] = matrix[y][x];
    }
  }
  return rotatedMatrix;
}

function fillFromBottom(_matrix) {
  const matrix = [..._matrix];
  const [STONE, EMPTY, OBSTACLE] = ['#', '.', '*'];
  // 로직의 일관성을 위해서 맨 밑에 OBSTACLE을 하나 추가한다
  matrix.push(OBSTACLE.repeat(matrix[0].length).split(''));
  const [height, width] = [matrix.length, matrix[0].length];
  const filledMatrix = [...new Array(height)].map(_ => Array(width).fill(EMPTY));
  for (let x = 0; x < width; x += 1) {
    let stoneCount = 0;
    for (let y = 0; y < height; y += 1) {
      if (matrix[y][x] === STONE) {
        stoneCount += 1;
      }
      else if (matrix[y][x] === OBSTACLE) {
        filledMatrix[y][x] = OBSTACLE;
        let _y = y - 1;
        while (stoneCount > 0) {
          filledMatrix[_y][x] = STONE;
          stoneCount -= 1;
          _y -= 1;
        }
      }
    }
  }
  filledMatrix.pop(); // 마지막줄에 있는 OBSTACLE배열을 삭제해준다
  return filledMatrix;
}

var rotateTheBox = function(box) {
  const rotatedBox = rotateMatrix(box);
  const filledBox = fillFromBottom(rotatedBox);
  return filledBox;
};