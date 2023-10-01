// Question : Explain how you would apply merge sort to sort large files that don't
// fit into memory. Discuss the challenges and steps involved.

// Sorting large files that don't fit into memory using merge sort involves external sorting:

// 1. Divide File into Chunks: Split the file into manageable chunks.

// 2. Sort Chunks in Memory: Sort each chunk in memory.

// 3. Merge Sorted Chunks: Merge chunks using a priority queue to create a sorted file.

// Challenges:

// - External Memory Limitations: Efficient I/O operations are crucial.
// - Chunk Size: Choose an appropriate size for chunks.
// - Handling Duplicates: Maintain stability when merging.
// - Temporary Files: Manage file I/O operations.
// - Performance Optimization: Consider parallel processing.
// - Error Handling: Handle disk space and I/O errors.

