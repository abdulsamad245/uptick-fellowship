// Question: Analyze the time and space complexity, including
// the best-case, worst-case, and average-case scenarios of the below algorithm.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

// fibonacci(5);



// Time Complexity:
// - Best Case: O(1).

// - Average Case: O(n).

// - Worst Case: O(n).

// Space Complexity:
// - The space complexity of this algorithm is O(n).

