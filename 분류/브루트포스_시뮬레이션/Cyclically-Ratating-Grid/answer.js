function rotateArray(arr, k) {
  k = k%arr.length;
  let rotatedArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i += 1) {
    const index = (i - k + arr.length)%arr.length;
    rotatedArr[index] = arr[i];
  }
  return rotatedArr;
}

var rotateGrid = function(grid, k) {
  const dyx = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const range = [grid[0].length, grid.length];
  let [d, y, x] = [0, 0, -1];
  let edges = [];
  while (range[0] > 0 && range[1] > 0) {
    for (let i = 0; i < range[d % 2]; i += 1) {
      [y, x] = [y + dyx[d % 4][0], x + dyx[d % 4][1]];
      edges.push([y, x]);
    }
    range[(d + 1) % 2] -= 1;
    d = (d + 1) % 4;
    // we get to end of edges
    if (y === x + 1) {
      const values = edges.map(([y, x]) => grid[y][x]);
      const rotatedValues = rotateArray(values, k);
      edges.map(([y, x], i) => { // insert rotated values
        grid[y][x] = rotatedValues[i];
      });
      edges = [];
    }
  }
  return grid;
};