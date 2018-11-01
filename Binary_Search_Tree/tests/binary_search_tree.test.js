const BinarySearchTree = require('../lib/binary_search_tree');

describe('BinarySearchTree', () => {

  let bst;
  let preFilledBst;
  beforeAll(() => {
    bst = new BinarySearchTree();
    preFilledBst = new BinarySearchTree();

    [5, 3, 7, 1, 4, 9, 0, 2, 1.5, 10].forEach((num) => {
      preFilledBst.insert(num);
    })
  })
  // #############################
  //   preFilledBst looks like:      
  //             (5)
  //            /  \         
  //          (3)  (7)
  //         /  \    \      
  //      (1)   (4)  (9)
  //     /  \          \   
  //   (0)  (2)       (10)
  //        /                 
  //     (1.5)
  // #############################

  describe('initialize', () => {
    test('it sets the root to null', () => {
      expect(bst.root).toBeNull();
    });
  });

  describe('insert', () => {
    test('it inserts values in the correct order', () => {
      bst.insert(5);
      expect(bst.root.value).toBe(5);

      bst.insert(2);
      expect(bst.root.left.value).toBe(2);

      bst.insert(8);
      expect(bst.root.right.value).toBe(8);

      bst.insert(1);
      let intermediate_root = bst.root.left;
      // intermediate_root is the node with value of 2
      expect(intermediate_root.left.value).toBe(1);

      expect(preFilledBst.root.value).toBe(5);
      expect(preFilledBst.root.left.value).toBe(3);
      expect(preFilledBst.root.left.left.value).toBe(1);
      expect(preFilledBst.root.left.left.left.value).toBe(0);
      expect(preFilledBst.root.left.left.right.value).toBe(2);
      expect(preFilledBst.root.left.left.right.left.value).toBe(1.5);
      expect(preFilledBst.root.left.right.value).toBe(4);
      expect(preFilledBst.root.left.right.right).toBeNull();
      expect(preFilledBst.root.right.value).toBe(7);
      expect(preFilledBst.root.right.left).toBeNull();
      expect(preFilledBst.root.right.right.value).toBe(9);
      expect(preFilledBst.root.right.right.right.value).toBe(10);
    });
  });


});