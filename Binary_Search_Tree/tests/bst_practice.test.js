const BinarySearchTree = require('../lib/binary_search_tree');
const kthLargest = require('../lib/bst_practical');

describe('BST Practical Question', () => {
  let preFilledBst = new BinarySearchTree();
  let balancedBst = new BinarySearchTree();

  beforeAll(() => {
    [5, 3, 7, 1, 4, 9, 0, 2, 1.5, 10].forEach((num) => {
      preFilledBst.insert(num);
    });

    [14, 4, 16, 1, 10, 20].forEach((num) => {
      balancedBst.insert(num);
    });
  });

  test('it returns the kth largest node', () => {
    let k = 7;
    let kNode = preFilledBst.root.left.left.right;
    // the above node is pointing to the node with value 2

    expect(kthLargest(preFilledBst.root, k)).toBe(kNode);

    let n = 2;
    let nNode = balancedBst.root.right;

    expect(kthLargest(balancedBst.root, n)).toBe(nNode);
  })
});