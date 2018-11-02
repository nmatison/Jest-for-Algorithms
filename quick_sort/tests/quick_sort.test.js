const quickSort = require('../lib/quick_sort');
quickSort();

describe('QuickSort', () => {
  describe('partition', () => {
    test('it partitions the whole array properly', () => {
      let arr = [3, 1, 5, 2, 5];
      let pivotIdx = arr.partition(0, 5);

      expect(arr[0] && arr[1]).toBeLessThan(arr[2]);
      expect(arr[3] && arr[4]).toBeGreaterThan(arr[2]);
      expect(pivotIdx).toBe(2);
    });

    test('it partitions a portion of the array', () => {
      let arr = [4, 3, 2, 1, 7, 5, 8, 6];
      let pivotIdx = arr.partition(4, 4);
      // Should not touch left half of the array

      expect(arr.slice(0, 4)).toEqual([4, 3, 2, 1]);

      expect(arr[4] && arr[5]).toBeLessThan(arr[6]);
      expect(arr[7]).toBeGreaterThan(arr[6]);
      expect(pivotIdx).toBe(6);
    });
  });

  describe('sort', () => {
    test('it sorts an array', () => {
      let arr = [5, 3, 4, 2, 1, 6];
      arr.sort();
      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('it makes the right number of comparisons (good case)', () => {
      let numComparisons = 0;
      let arr = [4, 2, 1, 3, 6, 5, 7];
      arr.sort((a, b) => {
        numComparisons += 1;

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      // When pivot is first element...
      // If pivot is swapped while iterating through the array,
      // then num_comparisons = 10.
      // If pivot is swapped after iterating through the array,
      // then num_comparisons = 11.

      expect([10, 11]).toContain(numComparisons);
    });

    test('it makes the right number of comparisons (worst case)', () => {
      let arr = [1, 2, 3, 4, 5];

      let numComparisons = 0;
      arr.sort((a, b) => {
        numComparisons += 1;

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

    //  When pivot is first element...
    //  If pivot is swapped while iterating through the array,
    //  then num_comparisons = 10.
    //  If pivot is swapped after iterating through the array,
    //  then num_comparisons = 8.
      expect([8, 10]).toContain(numComparisons);
    });
  });
});