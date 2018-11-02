const BinarySearchTree = require('../lib/binary_search_tree');
const BSTNode = require('../lib/bst_node');

describe('BinarySearchTree', () => {

  let bst;
  let preFilledBst;
  beforeEach(() => {
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

  describe('find', () => {
    test('it returns null if the value is not in the BST', () => {
      expect(preFilledBst.find(-5)).toBeNull();
    });

    test('it returns the correct node if the value is in the BST', () => {
      let foundNode = preFilledBst.find(4);
      expect(foundNode).toBeInstanceOf(BSTNode);
      expect(foundNode.value).toBe(4);
    });
  });

  describe('delete', () => {
    describe('if target node has no children', () => {
      test('it deletes the target node', () => {
        parentOfFour = preFilledBst.root.left;
        preFilledBst.delete(4);

        expect(parentOfFour.right).toBeNull();
      })

      test('it sets the root to nil if the target node is the root', () => {
        bst.insert(5);
        bst.delete(5);

        expect(bst.root).toBeNull();
      });
    });

    describe('if target node has one child', () => {
      test('it deletes the target node and promotes its child', () => {
        let parentOfSeven = preFilledBst.root;
        preFilledBst.delete(7);

        expect(parentOfSeven.right.value).toBe(9);
      })
    });

    describe('if target node has two children', () => {
      test(`it replaces target node with maximum of target's left tree`, () => {
        let parentOfThree = preFilledBst.root;
        preFilledBst.delete(3);

        expect(parentOfThree.left.value).toBe(2);
      });
    });

    describe('when promoted child has its own child', () => {
      test('it promotes its child to take its place', () => {
        let parentOfTwo = preFilledBst.root.left.left;
        preFilledBst.delete(3);
        // the above action promotes 2 to replace 3

        expect(parentOfTwo.right.value).toBe(1.5);
      });
    });
  });

  describe('maximum', () => {

    test('it finds the maximum', () => {
      expect(preFilledBst.maximum()).toBeInstanceOf(BSTNode);
      expect(preFilledBst.maximum().value).toBe(10);
    });

    test('it finds the maximum of subtrees', () => {
      let subtreeRoot = preFilledBst.root.left;

      expect(preFilledBst.maximum(subtreeRoot).value).toBe(4);
    });
  });

  describe('depth', () => {
    test('it finds the depth of the tree', () => {
      bst.insert(5);
      expect(bst.depth()).toBe(0);
      expect(preFilledBst.depth()).toBe(4);
    });
  });

  describe('is_balanced', () => {
    let balancedBst = new BinarySearchTree();
    [14, 4, 16, 1, 10, 20].forEach((num) => { balancedBst.insert(num)});

    describe('when tree is balanced', () => {
      test('it returns true', () => {
        expect(balancedBst.isBalanced()).toBeTruthy();
      });
    });

    describe('when tree is unbalanced', () => {
      test('it returns false', () => {
        expect(preFilledBst.isBalanced()).toBeFalsy();
      });
    });
  });
});