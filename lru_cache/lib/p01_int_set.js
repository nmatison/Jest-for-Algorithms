// class MaxIntSet {

//   constructor(max) {
//     this.max = max;
//     this.store = new Array(max + 1);
//   };

//   insert(num) {
//     if (num < 1 || num > this.max) throw "Out of bounds";
//     this.store[num] = true
//     num
//   };

//   include(num) {
//     if (!this.store[num]) return false;
//     return true;
//   };

//   remove(num) {
//     this.store[num] = false;
//     return num;
//   }
// }

// class IntSet {

//   constructor(num_buckets = 20) {
//     this.store = this.generateStore(num_buckets);
//   };

  

// };

// class ResizingIntSet {

// };

// module.exports = {
//   MaxIntSet,
//   IntSet,
//   ResizingIntSet
// };