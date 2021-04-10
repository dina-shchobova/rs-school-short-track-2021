/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const rezult = [];
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr.map((j) => j);
    arr2.splice(i, 1);
    rezult.push(+arr2.join(''));
  }
  return Math.max(...rezult);
}

module.exports = deleteDigit;
