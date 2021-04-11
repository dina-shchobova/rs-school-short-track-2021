const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.start = undefined;
  }

  get size() {
    let last = this.start;
    let counter = 0;
    while (last.next !== null) {
      last = last.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    if (this.start === undefined) {
      this.start = new ListNode(element);
    } else {
      let last = this.start;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = new ListNode(element);
    }
  }

  dequeue() {
    const deleteElement = this.start.value;
    this.start = this.start.next;
    return deleteElement;
  }
}

module.exports = Queue;
