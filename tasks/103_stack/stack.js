class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
    } else {
      let current = this.last;
      this.last = newNode;
      newNode.prev = current;
      this.last.prev = current;
    }
    this.size++;
  }
  size() {
    return this.size;
  }
  pop() {
    if (!this.last ) return false;
    let current = this.last;
    this.last = current.prev;
    this.size--;
    return current.value;
  }
}
