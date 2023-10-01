// Question: Implement a queue data structure using two stacks. Analyze the time
// complexity of enqueue and dequeue operations
class QueueWithTwoStacks {
    constructor() {
      this.stack1 = []; // For enqueueing
      this.stack2 = []; // For dequeueing
    }
  
    enqueue(item) {
      // Simply push the item onto stack1
      this.stack1.push(item);
    }
  
    dequeue() {
      // If stack2 is empty, transfer elements from stack1 to stack2
      if (this.stack2.length === 0) {
        if (this.stack1.length === 0) {
          return undefined; // Queue is empty
        }
        // Transfer elements by popping from stack1 and pushing to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      // Pop from stack2 to perform the dequeue operation
      return this.stack2.pop();
    }
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
 
  
  const queue = new QueueWithTwoStacks();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
  console.log(queue.dequeue()); // 3
  console.log(queue.dequeue()); // undefined (queue is empty)


// Time Complexity Analysis:

// Enqueue Operation (enqueue):
// Time Complexity: O(1)

// Dequeue Operation (dequeue):
// Amortized Time Complexity: O(1)

  