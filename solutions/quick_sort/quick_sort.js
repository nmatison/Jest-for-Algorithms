
const quickSort = function() {

  Array.prototype.partition = function(start = 0, end = this.length, cb) {
    if (!cb) {
      cb = (a, b) => {

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }
    let barrier = start;
    let firstElement = this[start];
    let pointer = start + 1;

    while (pointer < (start + end)) {
      if (cb(firstElement, this[pointer]) > 0) {
        let temp = this[barrier + 1];
        this[barrier + 1] = this[pointer];
        this[pointer] = temp;
        barrier++;
      }
      pointer++;
    }

    this[start] = this[barrier];
    this[barrier] = firstElement;

    return barrier;
  };

  Array.prototype.quickSort = function(start = 0, end = this.length, cb) {
    if (end < 2) return this; 
    if (!cb) {
      cb = (a, b) => {

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }
    };

    let pivot = this.partition(start, end, cb);
    this.quickSort(start, pivot - start, cb);
    this.quickSort(pivot + 1, end - ((pivot - start) + 1), cb);
    
  }

};

module.exports = quickSort;

