const BSTNode = require('../lib/bst_node');


const _insertHelper = Symbol('insert_helper');
// saving them as consts and making them symbols allows es6 classes to have private methods

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  insert(value) {
    if (this.root === null){
      this.root = new BSTNode(value);
      return value;
    } 
    return this[_insertHelper](this.root, value).value;
  }

  find(value, node = this.root) {
    if (node.value === value) return node;
    if (value < node.value) {
      return node.left === null ? null : this.find(value, node.left);
    } else {
      return node.right === null ? null : this.find(value, node.right);
    }
  };

  delete(value) {
    let node = this.find(value);
  };

  maximum(node = this.root) {
    if (node.right === null) return node;
    return this.maximum(node.right);
  };

  depth(node = this.root, count = 0) {
    if (node.left === null && node.right === null) return count;
    let leftCount;
    let rightCount;
      leftCount = node.left === null ? 0 : this.depth(node.left, count + 1);
      rightCount = node.right === null ? 0 : this.depth(node.right, count + 1);
    if (leftCount >= rightCount) {
      return leftCount; 
    } else {
      return rightCount;
    }
  };

  isBalanced(node = this.root) {
    if (!node.left || !node.right) return true;
    if (Math.abs(this.depth(node.left) - this.depth(node.right)) > 1) return false;
    if (!this.isBalanced(node.left) || !this.isBalanced(node.right)) return false;
    return true;
  };

  [_insertHelper](node, value) {
    if (value <= node.value) {
      if (node.left) {
        return this[_insertHelper](node.left, value);
      } else {
        node.left = new BSTNode(value);
        node.left.parent = node;
        return node.left;
      }
    } else {
      if (node.right) {
        return this[_insertHelper](node.right, value);
      } else {
        node.right = new BSTNode(value);
        node.right.parent = node;
        return node.right;
      }
    }
  };
}

module.exports = BinarySearchTree;