class BSTNode {

  constructor(value) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this._value = value
  }

  get value() {
    return this._value;
  };
}

module.exports = BSTNode;