class DynamicProgramming {

  constructor() {
    this.blairCache = {
      1: 1,
      2: 2
    };

    this.frogCache = {
      1: [[1]],
      2: [[1, 1], [2]],
      3: [[1, 1, 1], [1, 2], [2, 1], [3]]
    };
  };

  blairNums(n) {
    if (this.blairCache[n]) return this.blairCache[n];
    let ans = this.blairNums(n - 1) + this.blairNums(n - 2) + (2 * (n - 1) - 1);
    this.blairCache[n] = ans;
    return this.blairCache[n];
  };

  frogHopsBottomUp(n) {
    return this.frogCacheBuilder(n)
  };

  frogCacheBuilder(n) {
    let cache = {
      1: [[1]],
      2: [[1, 1], [2]],
      3: [[1, 1, 1], [1, 2], [2, 1], [3]]
    };
    
    if (cache[n]) {
      return cache[n];
    }

    for(let i = 4; i <= n; i++) {
      cache[i] = [];
      cache[i] = cache[i].concat(this.frogHopsHelper(cache[i - 3], 3));
      cache[i] = cache[i].concat(this.frogHopsHelper(cache[i - 2], 2));
      cache[i] = cache[i].concat(this.frogHopsHelper(cache[i - 1], 1));
    };
    return cache[n].sort();
  };

  frogHopsTopDown(n) {
    if (this.frogCache[n]) return this.frogCache[n];
    this.frogCache[n] = [];
    this.frogCache[n] = this.frogCache[n].concat(this.frogHopsHelper(this.frogHopsTopDown(n - 1), 1));
    this.frogCache[n] = this.frogCache[n].concat(this.frogHopsHelper(this.frogHopsTopDown(n - 2), 2));
    this.frogCache[n] = this.frogCache[n].concat(this.frogHopsHelper(this.frogHopsTopDown(n - 3), 3));
    return this.frogCache[n].sort();
  };

  superFrogHops(n, k) {
    
  };

  frogHopsHelper(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i].slice(0)
      temp.push(n);
      result.push(temp);
    };
    return result;
  };

  
}

module.exports = DynamicProgramming;