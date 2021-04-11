/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let leftIndex = 0;
  let rightIndex = array.length;
  let x = Math.floor(array.length / 2);
  while (array[x] !== value) {
    if (array[x] > value) {
      rightIndex = x;
      x = Math.floor((rightIndex - leftIndex) / 2);
    }
    if (array[x] < value) {
      leftIndex = x;
      x = Math.floor(((rightIndex + leftIndex) / 2));
    }
  }
  return x;
}

module.exports = findIndex;
