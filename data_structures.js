// Stack ES5
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
}

Stack.prototype.pop = function() {
    if (this._count === 0) {
        return 'No element inside the stack. Add element before poping.';
    }

    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

Stack.prototype.peek = function() {
    return this._storage[this._count-1];
};

Stack.prototype.count = function() {
    return this._count;
};

var myStack = new Stack(3);

myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
myStack.pop();
myStack.peek();
myStack.count();

// Stack ES6
class Stack {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._count = 0;
    }

    push(value) {
        if (this._count < this._capacity) {
            this._storage[this._count++] = value;
            return this._count;
        }
        return 'The Stack is full';
    }

    pop() {
        if (this._count === 0) {
            return 'The Stack is empty, nothing to delete';
        }
        const value = this._storage[--this._count];
        delete this._storage[this._count];
        return value;
    }

    peek() {
        return this._storage[this._count-1];

    }

    count() {
        return this._count;
    }

    contains(arg) {

    }

    until(arg) {

    }
}

var myStack = new Stack(3);

myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
myStack.pop();
myStack.peek();
myStack.count();

// Implement minStack

// Queue ES6
class Queue {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    enqueue(value) {
        if (this.count() < this._capacity) {
            this._storage[this._tail++] = value;
            return this.count();
        }
        return 'The Stack is full';
    }

    dequeue() {
        if (this.count() === 0) {
            return "The stack is empty";
        }
        const value = this._storage[this._head];
        delete this._storage[this._head++];
        return value;
    }

    peek() {
        return this._storage[this._head];
    }

    count() {
        return this._tail - this._head;

    }

    contains(arg) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === arg) {
                return true;
            }
        }
        return false;
    }

    until(arg) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === arg) {
                return i-this._head+1;
            }
        }
    }
}

let myQueue = new Queue(10);
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.dequeue();
myQueue.peek();
myQueue.count();
myQueue.contains('c');
myQueue.until('c');

/* 
Linked List
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.

1. Create Node constructor and store next and value in there
2. Create LinkedList constructor with headValue
- if headValue undefined throw an error
- assign new node with headValue to the head;
- assign tail to the head
3. Create methods
- forEach - invoke callback function with the value of each node
- print - string with all values in list
- insertAfter - insert new node associated with value passed in after refNode
- removeAfter - remove node after the refNode
- insertHead - insert new head node at the beginning of the list with the value passed in
- removeHead - remove the head node of the linked list
- findNode - first node that has a value matching what was passed in
- appendToTail - add a new tail node at the end of the list with the associated value passed in
*/
function Node(value) {
    this.next = null;
    this.value = value;
}

function LinkedList(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

LinkedList.prototype.forEach = function(callback) {
    var node = this.head;
    while (node) {
        callback(node.value);
        node = node.next;
    }
};

LinkedList.prototype.print = function() {
    var result = [];
    this.forEach(function(value) {
        result.push(value);
    });
    return result.join(', ');
};

LinkedList.prototype.insertAfter = function(node, value) {
    var oldNext = node.next;
    var newNext = new Node(value);
    node.next = newNext;
    newNext.next = oldNext;
    if (this.tail === node) this.tail = newNext;
    return newNext;   
};

LinkedList.prototype.removeAfter = function(node) {
    var removedNode = node.next;
    if (!removedNode) return 'Nothing to remove';
    var newNext = removedNode.next;
    node.next = newNext;
    removedNode.next = null;
    if (removedNode === this.tail) this.tail = node;
    return removedNode;
};

LinkedList.prototype.insertHead = function(value) {
    var newHead = new Node(value);
    var oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    return this.head;
};

LinkedList.prototype.removeHead = function() {
    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;
    oldHead.next = null;
    return oldHead;    
};

LinkedList.prototype.findNode = function(value) {
    var node = this.head;
    while (node) {
        if (node.value === value) return node;
        node = node.next;
    }
    return 'No node with value: ' + value + ' found.';   
};

LinkedList.prototype.appendToTail = function(value) {
    var newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;

    return newTail;
}

var myList = new LinkedList(0);

// Double Linked List

// Tree