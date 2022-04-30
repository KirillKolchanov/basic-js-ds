const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  //returns underlying linked list
  getUnderlyingList(elem) {
    return this.length === 0 ? null : this.head;
  }

  // puts the value at the end of the queue
  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }
    this.length++;
  }

  //retrieves a value from the head of the queue and deletes it
  dequeue() {
    if (this.length === 0) {
      return null;
    } else {
      let head = this.head;
      this.head = head.next;
      this.length--;
      return head.value;
    }
  }
}

module.exports = {
  Queue
};
