/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const rezult = names.map((k) => k);
  for (let i = 0; i < rezult.length; i++) {
    let counter = 0;
    for (let j = 1; j < rezult.length; j++) {
      if ((i !== j) && rezult[i] === rezult[j]) {
        counter++;
        rezult[j] += `(${counter})`;
      }
    }
  }
  return rezult;
}

module.exports = renameFiles;
