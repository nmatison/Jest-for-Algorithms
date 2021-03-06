const DynamicProgramming = require('../lib/dynamic_programming');

describe('Knapsack', () => {
  let dp = new DynamicProgramming();
  let weights1 = [23, 31, 29, 44, 53, 38, 63, 85, 89, 82];
  let values1 = [92, 57, 49, 68, 60, 43, 67, 84, 87, 72];
  let weights2 = [12, 7, 11, 8, 9];
  let values2 = [24, 13, 23, 15, 16];

  test('it handles trivial cases', () => {
    expect(dp.knapsack(weights1, values1, 0)).toBe(0);
    expect(dp.knapsack(weights1, values1, 23)).toBe(92);
  })

  test('it handles recursive cases', () => {
    expect(dp.knapsack(weights1, values1, 165)).toBe(309);
    expect(dp.knapsack(weights2, values2, 26)).toBe(51);
  })
});