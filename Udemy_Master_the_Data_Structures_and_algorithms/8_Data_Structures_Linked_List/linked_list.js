// null - is called terminator - end of the list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    console.log(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // better option with class node
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  //   Click here to join the digital event

  //   https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGRkOTZkZTMtMGNmYy00NDc4LThlMTgtOWMwODdhZmY0MzJl%40thread.v2%2F0%3Fcontext%3D%257B%2522Tid%2522%253A%252272f988bf-86f1-41af-91ab-2d7cd011db47%2522%252C%2522Oid%2522%253A%2522e82dc135-7684-466b-9537-9e87253901be%2522%252C%2522prid%2522%253A%2522ER_VV2KF3JA3N6MWJQE5WNF8LSFLB%2522%257D%26anon%3Dtrue&type=meetup-join&deeplinkId=9d244500-75b6-4d15-b960-5d5aea59e76e&directDl=true&msLaunch=true&enableMobilePage=true#msdynttrid=f5QM6ag24tt4ikQ1dWZEmbhrQL5d1XkYSKbf-eltes0&suppressPrompt=true

  // does not work for removing a head
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);

console.log(myLinkedList.printList());
myLinkedList.remove(1);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
