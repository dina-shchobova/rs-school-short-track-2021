/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {[]}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let current = l;
  while (l && l.value === k) {
    // eslint-disable-next-line no-param-reassign
    l = l.next;
  }
  while (current && current.next !== null) {
    if (current.next.value === k) {
      // eslint-disable-next-line no-param-reassign
      current.next = current.next.next;
    }
    // eslint-disable-next-line no-param-reassign
    current = current.next;
  }
  return l;
}

module.exports = removeKFromList;
