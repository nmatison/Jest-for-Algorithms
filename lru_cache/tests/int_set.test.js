const MaxIntSet = require('../lib/p01_int_set').MaxIntSet;

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

// describe('IntSet', () => {
//   let set = IntSet.new(20);

//   describe('include', () => {
//     test('it should return false unless the number has been inserted', () => {
//       expect(set.include(1)).toBeFalsy();
//     });
//   });
// });


