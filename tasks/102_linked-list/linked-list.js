
class Node {
  constructor( value, next = null ) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      if ( current.next ) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
      this.tail = newNode;
    }
    this.amount++;
    return this;
  }
  pop() {
    const current = this.tail;

    if (this.amount === 1) {
      this.head = null;
      this.tail = null;
      this.amount--;
      return current;
    }
    this.tail = current.prev;
    this.tail.next = null;
    this.amount--;
    return current;
  }
  iterate() {
    let values = [];
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  insertAfter( element, value ) {
    let current = this.head;
    const newNode = new Node(value);

    while (current) {
      if (current.value === element) {
        const next = current.next;
        current.next = newNode;
        newNode.prev = current;
        newNode.next = next;

        if (next !== null) {
          next.prev = newNode;
        } else {
          this.tail = newNode;
        }

        this.amount++;
        return true;
      }
      current = current.next;
    }
    return false;
  }
  removeItem(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        const previous = current.prev;
        const next = current.next;

        if (previous !== null) {
          previous.next = next;
        } else {
          this.head = next;
        }

        if (next !== null) {
          next.prev = previous;
        } else {
          this.tail = previous;
        }

        this.amount--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

