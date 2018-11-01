const installOrder = require('../lib/install_order');

describe('install order', () => {
  let arr;
  let result;

  beforeAll(() => {
    arr = [[3, 1], [2, 1], [6, 5], [3, 6], [3, 2], [4, 3], [9, 1]];
    result = installOrder(arr);
  })

  test('it fills in nodes with no dependencies', () => {
    expect(result.indexOf(8)).not.toBeNull();
    expect(result.indexOf(7)).not.toBeNull();
  });

  test('it returns the correct order', () => {
    expect(result.indexOf(3)).toBeGreaterThan(result.indexOf(1));
    expect(result.indexOf(2)).toBeGreaterThan(result.indexOf(1));
    expect(result.indexOf(6)).toBeGreaterThan(result.indexOf(5));
    expect(result.indexOf(3)).toBeGreaterThan(result.indexOf(6));
    expect(result.indexOf(3)).toBeGreaterThan(result.indexOf(2));
    expect(result.indexOf(4)).toBeGreaterThan(result.indexOf(3));
    expect(result.indexOf(9)).toBeGreaterThan(result.indexOf(1));
  });
});
