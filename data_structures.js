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