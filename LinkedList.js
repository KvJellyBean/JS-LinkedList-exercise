import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }

  // Add new node at the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.HEAD === null) {
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      this.TAIL.nextNode = newNode;
      this.TAIL = newNode;
    }
  }

  // Add new list at the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.HEAD === null) {
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      newNode.nextNode = this.HEAD;
      this.HEAD = newNode;
    }
  }

  // Count the total number of nodes in the list
  size() {
    let currentNode = this.HEAD;
    let listSize = 0;
    while (currentNode !== null) {
      listSize++;
      currentNode = currentNode.nextNode;
    }
    return listSize;
  }

  // Return the first node in the list
  head() {
    return this.HEAD;
  }

  // Return the last node in the list
  tail() {
    return this.TAIL;
  }

  // Return the node at the given index
  at(index) {
    let currentNode = this.HEAD;

    if (index >= this.size() || index < 0) return "Out of index";

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // Delete the last node in the list
  pop() {
    let currentNode = this.HEAD;
    let previousNode = null;
    if (currentNode === null || currentNode.nextNode === null) {
      this.HEAD = null;
      this.TAIL = null;
      return;
    }

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    this.TAIL = previousNode;
  }

  // Check if the value given is in the list
  contains(value) {
    let currentNode = this.HEAD;

    while (currentNode !== null) {
      if (currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Find the index of the given value
  find(value) {
    let currentNode = this.HEAD;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value == value) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  // Represent Linkedlist object to string
  toString() {
    let currentNode = this.HEAD;

    while (currentNode !== null) {
      process.stdout.write(`( ${currentNode.value} ) ->  `);
      currentNode = currentNode.nextNode;
    }
    // Print the null in the end
    console.log(currentNode);
  }

  insertAt(value, index) {
    let currentNode = this.HEAD;
    let previousNode = null;

    if (index === 0 || currentNode === null) return this.prepend(value);
    else if (index === this.size()) return this.append(value);
    else if (index > 0 || index < this.size()) {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }

      const newNode = new Node(value);
      newNode.nextNode = currentNode;
      previousNode.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) return;
    if (index === 0) {
      this.HEAD = this.HEAD.nextNode;
      return;
    }

    let currentNode = this.HEAD;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (index === this.size()) {
      previousNode.nextNode = null;
    } else {
      previousNode.nextNode = currentNode.nextNode;
    }
    currentNode = null;
  }
}

const myLinkedList = new LinkedList();
