class BSTNode {

  constructor(value) {
    this.left = null;
    this.right = null;
    this._value = value
  }

  get value() {
    return this._value;
  };
}

module.exports = BSTNode;