const dynamicProgramming = require('../lib/dynamic_programming');

describe('Frog Hops Bottom Up', () => {
  let dp = new dynamicProgramming();

  describe('Frog Hops Bottom Up', () => {
    test('it handles a base case', () => {
      expect(dp.frogHopsBottomUp(1)).toEqual([[1]]);
      expect(dp.frogHopsBottomUp(2)).toEqual([[1, 1], [2]]);
    });

    test('it handles recursive cases', () => {
      expect(dp.frogHopsBottomUp(4)).toEqual([[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]].sort());
      expect(dp.frogHopsBottomUp(10)).toHaveLength(274);
      expect(dp.frogHopsBottomUp(10)).toContainEqual([1, 3, 3, 3]);
    });
  });

  describe('Frog Hops Top Down', () => {
    test('it handles a base case', () => {
      expect(dp.frogHopsTopDown(1)).toEqual([[1]])
      expect(dp.frogHopsTopDown(2)).toEqual([[1, 1], [2]]);
    });

    test('it handles recursive cases', () => {
      expect(dp.frogHopsTopDown(4)).toEqual([[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]].sort());
      expect(dp.frogHopsTopDown(10)).toHaveLength(274);
      expect(dp.frogHopsTopDown(10)).toContainEqual([1, 3, 3, 3]);
    });
  });
});