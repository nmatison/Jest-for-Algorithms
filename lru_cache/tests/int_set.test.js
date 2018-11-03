const MaxIntSet = require('../lib/p01_int_set').MaxIntSet;
const IntSet = require('../lib/p01_int_set').IntSet;
const ResizingIntSet = require('../lib/p01_int_set').ResizingIntSet;

describe('MaxIntSet', () => {
  let set = new MaxIntSet(50);

  describe('insert', () => {
    let notError = () => {
      set.insert(49);
    };

    let insertError = () => {
      set.insert(51);
    };

    let insertError2 = () => {
      set.insert(-1);
    };
    // Jest requires that you wrap whatever you want to error test into a function. Hence the above syntax to test for errors below.

    test('it should be able to insert the numbers within the range', () => {
      expect(notError).not.toThrow('Out of bounds');
    })

    test('it should raise an error when inserting numbers that are out of the range', () => {
      expect(insertError).toThrow('Out of bounds');
      expect(insertError2).toThrow('Out of bounds');
    })
  });

  describe('include', () => {
    test('it should return false unless the number has been inserted', () => {
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeFalsy();
    });

    test('it should return true if the number has been inserted', () => {
      set.insert(1);
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeTruthy();
    });
  });

  describe('remove', () => {
    test('it should remove a number from the set', () => {
      // set.insert(1);
      set.remove(1);
      expect(set.include(1)).toBeFalsy();
    });
  });
});

describe('IntSet', () => {
  let set = IntSet.new(20);

  describe('insert', () => {

      let notError = () => {
        set.insert(49);
      };

    test('it should be able to insert any numbers', () => {
      expect(notError).not.toThrow();
      set.insert(50);
      expect(typeof set.include(50)).toBe('boolean');
      expect(set.include(50)).toBeTruthy();
    });
  });

  describe('include', () => {
    test('it should return false unless the number has been inserted', () => {
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeFalsy();
    });

    test('it should return true if the number has been inserted', () => {
      set.insert(1);
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeTruthy();
    });
  });

  describe('remove', () => {
    test('it should remove a number from the set', () => {
      set.insert(1);
      set.remove(1);
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeFalsy();
    });
  });
});

describe('ResizingIntSet', () => {
  let set = new ResizingIntSet(20);

  let notError = () => {
    set.insert(49);
  };

  describe('insert', () => {
    test('it should be able to insert any numbers', () => {
      expect(notError).not.toThrow();
      set.insert(50);
      expect(typeof set.include(50)).toBe('boolean');
      expect(set.include(50)).toBeTruthy();
    })
  });

  describe('include', () => {
    test('it should return false unless the number has been inserted', () => {
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeFalsy();
    });

    test('it should return true if the number has been inserted', () => {
      set.insert(1);
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeTruthy();
    });
  });

  describe('remove', () => {
    test('it should remove a number from the set', () => {
      set.insert(1);
      set.remove(1);
      expect(typeof set.include(1)).toBe('boolean');
      expect(set.include(1)).toBeFalsy();
    });
  });

  describe('count', () => {
    test('it should keep track of how many entries the set has', () => {
      expect(set.count).toBe(0);
      for (let i = 0; i < 5; i++) set.insert(i);
      expect(set.count).toBe(5);
    });
  });

  // describe('resize', () => {

  // })
});


