// Question: Implement the exponential search algorithm for a sorted array and analyze its time complexity.

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const equal = [];
    const less = [];
    const greater = [];
  
    for (let element of arr) {
      if (element < pivot) {
        less.push(element);
      } else if (element > pivot) {
        greater.push(element);
      } else {
        equal.push(element);
      }
    }
  
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }
  
  // Example usage:
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArr = quickSort(arr);
  console.log(sortedArr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  


// Time Complexity Analysis:

// - Average Case: O(n log n)
// - Best Case : O(n log n)
// - Worst Case : O(n^2)
