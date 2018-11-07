const DynamicProgramming = require('../lib/dynamic_programming');

describe('Maze Traversal', () => {
  let maze1 = [
    ['X', 'X', 'X', 'X'],
    ['X', 'S', ' ', 'X'],
    ['X', 'X', 'F', 'X']
  ];

  let maze2 = [
    ['X', 'X', 'X', ' ', 'X', 'X', 'F', 'X'],
    ['X', 'S', 'X', ' ', 'X', 'X', ' ', 'X'],
    ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', 'X', 'X', ' ', 'X', 'X', ' ', 'X'],
    ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  ];

  let dp = new DynamicProgramming();

  test('it handles a small maze', () => {
    expect(dp.mazeSolver(maze1, [1, 1], [0, 6])).toEqual([[1, 1], [1, 2], [2, 2]]);
  });

  test('it chooses the optimal solution among many', () => {
    let mazeSolution = [[1, 1], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [1, 6], [0, 6]];
    expect(dp.mazeSolver(maze2, [1, 1], [0, 6])).toEqual(mazeSolution);
  });
});