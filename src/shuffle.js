// Shuffle function that modifies input array

const shuffle = function(array) {
  let j, temp;
  for(let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
};

module.exports = shuffle;