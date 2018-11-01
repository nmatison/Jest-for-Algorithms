const BSTNode = require('../lib/bst_node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null){
      this.root = new BSTNode(value);
      return value;
    } 
    return this.insertHelper(this.root, value).value;
  }

  find(value, node = this.root) {
    if (node.value === value) return node;
    if (value < node.value) {
      return node.left === null ? null : this.find(value, node.left);
    } else {
      return node.right === null ? null : this.find(value, node.right);
    }
  };

  insertHelper(node, value) {
    if (value <= node.value) {
      if (node.left) {
        return this.insertHelper(node.left, value);
      } else {
        node.left = new BSTNode(value);
        return node.left;
      }
    } else {
      if (node.right) {
        return this.insertHelper(node.right, value);
      } else {
        node.right = new BSTNode(value);
        return node.right;
      }
    }
  };
}

module.exports = BinarySearchTree;