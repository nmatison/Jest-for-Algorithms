const DynamicProgramming = require('../lib/dynamic_programming');

describe('Blair Numbers', () => {
  let dp = new DynamicProgramming();

  test('it handles base cases', () => {
    expect(dp.blairNums(1)).toBe(1);
    expect(dp.blairNums(2)).toBe(2);
  });

  test('it handles recursive cases', () => {
    expect(dp.blairNums(6)).toBe(48);
    expect(dp.blairNums(50)).toBe(98853840194);
  });

  test('it runs in non-exponential time', () => {
    var start = new Date().getTime();
    dp.blairNums(1000);
    var end = new Date().getTime();
    var time = end - start;

    expect(time).toBeLessThan(100);
  });
});