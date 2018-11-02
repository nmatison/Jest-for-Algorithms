const BSTNode = require('../lib/bst_node');


const _insertHelper = Symbol('insertHelper');
const _reassignParent = Symbol('reassignParent');
const _deleteHelper = Symbol('deleteHelper');
// saving them as consts and making them symbols allows es6 classes to have private methods

class BinarySearchTree {
  constructor(root) {
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
    if (!node.left && !node.right) {
      if (node === this.root) {
        this.root = null;
        return node;
      };
      this[_reassignParent](node, node.parent);
    }

    if (!node.left) {
      this[_reassignParent](node, node.parent, node.right);
    }

    if (!node.right) {
      this[_reassignParent](node, node.parent, node.left);
    }

    if (node.left && node.right) {
      this[_deleteHelper](node, node.parent);
    }

    return node;
  };

  maximum(node = this.root) {
    if (!node.right) return node;
    return this.maximum(node.right);
  };

  depth(node = this.root, count = 0) {
    if (!node.left && !node.right) return count;
    let leftCount;
    let rightCount;
      leftCount = !node.left ? 0 : this.depth(node.left, count + 1);
      rightCount = !node.right ? 0 : this.depth(node.right, count + 1);
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

  inOrderTraversal(node = this.root) {
    if (!node.left && !node.right) return [node.value]
    let left;
    let right;
    left = !node.left ? [] : this.inOrderTraversal(node.left);
    right = !node.right ? [] : this.inOrderTraversal(node.right);
    return left.concat([node.value], right);
  }

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

  [_reassignParent](deleteNode, parent, reassign = null) {
    let left = parent.left === deleteNode ? true : false;
    if (left) {
      parent.left = reassign;
    } else {
      parent.right = reassign;
    }
  };

  [_deleteHelper](deleteNode, parent = null) {
    let max = this.maximum(deleteNode.left);
    this[_reassignParent](deleteNode, parent, max);
    if (max.left) {
      this[_reassignParent](max, max.parent, max.left)
    } else {
      max.left = deleteNode.left;
    } 
    max.right = deleteNode.right;
  }
}

module.exports = BinarySearchTree;