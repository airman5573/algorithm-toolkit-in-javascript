function loopGrid(grid, callback) {
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      callback(y, x);
    }
  }
}

var numIslands = function(grid) {
  let island = 0;
  const [height, width] = [grid.length, grid[0].length];
  const [LAND, WATER] = ['1', '0'];
  const dyx = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const Q = [];
  const bfs = () => {
    while (Q.length > 0) {
      const [y, x] = Q.pop();
      grid[y][x] = WATER;
      dyx.forEach(([dy, dx]) => {
        const [ny, nx] = [y + dy, x + dx];
        if (ny < 0 || ny >= height || nx < 0 || nx >= width) {
          return;
        }
        if (grid[ny][nx] === LAND) {
          Q.push([ny, nx]);
        }
      }); 
    }
  };
  loopGrid(grid, (y, x) => {
    if (grid[y][x] === LAND) {
      Q.push([y, x]);
      bfs();
      island += 1;
    }
  });
  return island;
};