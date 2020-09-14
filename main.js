// Stack Class
class Stack {
// There must be an array to represent the stack at start and it will initialize empty
    constructor() {
        this.arr = [];
    }
    
    // Stacks typically are built with the following methods
    // 1) Push method adds to the top of the stack
    push(item) {
        this.arr.push(item);
    }
    
    // 2) Pop method removes from the top of the stack
    pop() {
        this.arr.pop();
    }
    
    // 3) Peek logs the top element on the stack
    peek() {
        const lastItem = this.arr[this.arr.length - 1];
        console.log(lastItem);
    }
    
    // 4) isEmpty returns true if the stack is empty
    isEmpty() {
        return this.arr.length === 0;
    }
}

let myStack = new Stack();
console.log(myStack.isEmpty());
myStack.peek();

// Queue Class
class Queue {
    // There must be an array to represent the queue and it will initialize empty
    constructor() {
        this.queue = [];
    }

    // Queues typically are built with the following methods
    // 1) Enqueue method adds to the back of the queue
    enqueue() {
        
    }
}
// 2) Dequeue method removes from the front of the queue
// 3) Front logs the element at the front of the queue
// 4) isEmpty return true if the queue is empty
// 5) printQueue returns a string of items in the queue separated by commas
