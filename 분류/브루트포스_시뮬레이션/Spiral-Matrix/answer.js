var spiralOrder = function(matrix) {
  const result = [];
  const dyx = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const range = [matrix[0].length, matrix.length];
  let [d, y, x] = [0, 0, -1];
  while (range[0] > 0 && range[1] > 0) {
    for (let i = 0; i < range[d % 2]; i += 1) {
      [y, x] = [y + dyx[d % 4][0], x + dyx[d % 4][1]];
      result.push(matrix[y][x]);
    }
    range[(d + 1) % 2] -= 1;
    d = (d + 1) % 4;
  }
  return result;
};