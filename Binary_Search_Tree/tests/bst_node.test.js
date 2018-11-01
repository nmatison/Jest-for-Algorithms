const BSTNode = require('../lib/bst_node');

describe('BSTNode', () => {
  let testNode;

  beforeAll(() => {
    testNode = new BSTNode(5);
  });

  test('it sets the value in the constructor', () => {
    expect(testNode.value).toBe(5);
  });

  test('it starts a left and a right as null', () => {
    expect(testNode.left).toBeNull();
    expect(testNode.right).toBeNull();
  });

  test('it allows the left and right to be reassigned', () => {
    let left = new BSTNode(3);
    let right = new BSTNode(7);
    testNode.left = left;
    testNode.right = right;
    
    expect(testNode.left).toBe(left);
    expect(testNode.right).toBe(right);
  });
})