// Question:  Implement the merge sort algorithm for sorting a linked list. Analyze the time and space complexity of your implementation.
class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function mergeSort(head) {
    if (!head || !head.next) {
      return head;
    }
  
    const middle = findMiddle(head);
    const left = head;
    const right = middle.next;
    middle.next = null; // Split the list into two halves
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  
  function merge(left, right) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (left && right) {
      if (left.value < right.value) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }
  
    current.next = left || right;
  
    return dummy.next;
  }
  
  function printList(head) {
    let current = head;
    while (current) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }
    console.log("null");
  }
  
  const head = new ListNode(3, new ListNode(1, new ListNode(4, new ListNode(2, new ListNode(5)))));
  const sortedHead = mergeSort(head);
  
  console.log("Sorted Linked List:");
  printList(sortedHead);

// Time Complexity:
// The time complexity of this merge sort implementation for a linked list is O(n log n).

// Space Complexity:
// The space complexity is O(log n) due to the recursion stack.





  