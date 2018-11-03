class DynamicProgramming {

  constructor() {
    this.blairCache = {
      1: 1,
      2: 2
    };
  };

  blairNums(n) {
    if (this.blairCache[n]) return this.blairCache[n];
    let ans = this.blairNums(n - 1) + this.blairNums(n - 2) + (2 * (n - 1) - 1);
    this.blairCache[n] = ans;
    return this.blairCache[n];
  };

}

module.exports = DynamicProgramming;