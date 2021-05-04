const pathFinder = maze => { 
  let count = 0,
    visited = [],
    options = true,
    x = 0, y = 0,
    end = maze.length/2 - 1,
    mazeArray = maze.split("\n")
  while (options) {
    visited.push([x, y])
    if (mazeArray[y][x+1] === ".") {
      x++, count++
      continue
    }
    if (mazeArray[y+1][x] === ".") {
      y++, count++
      continue
    }
    if (count > 0) {
      if (!visited.includes([x, y-1]) && mazeArray[y-1][x] === ".") {
        y--, count++
        continue
      }
      if (!visited.includes([x-1, y]) && mazeArray[y][x-1] === ".") {
        x--, count++
        continue
      }
    }
    options = false
  }
  return x === end && y === end ? count : false
}

// not mine
function pathFinder(maze) {
  const matrix = maze.split`\n`.map(row => row.split``);
  const queue = [{ x: 0, y: 0, len: 0 }];
  const n = matrix.length - 1;

  while (queue.length) {
    const { x, y, len } = queue.shift();
    if (x == n && y == n) {
      return len;
    }
    matrix[x][y] = 'W';
    [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].forEach(([t1, t2]) => {
      if (matrix[t1] && matrix[t1][t2] && matrix[t1][t2] != 'W') {
        queue.push({x: t1, y: t2, len: len + 1});
        matrix[t1][t2] = 'W';
      }
    });
  }
  return false;
}