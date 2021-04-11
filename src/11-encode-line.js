/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const rezult = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    while (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      counter++;
    }
    if (counter > 1) {
      rezult.push(`${counter}${arr[i]}`);
    } else {
      rezult.push(`${arr[i]}`);
    }
  }
  return rezult.join('');
}

module.exports = encodeLine;
