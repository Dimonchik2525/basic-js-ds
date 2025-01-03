const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.back = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.back) {
      this.top = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.top) {
      return null;
    }

    const value = this.top.value;
    this.top = this.top.next;
    if (!this.top) {
      this.back = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
