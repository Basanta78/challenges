function isInMatrix(matrix: number[][], num: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  // Binary search on the 2D matrix treated as a 1D array
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midElement = matrix[Math.floor(mid / n)][mid % n];

    if (midElement === num) {
      return true;
    }
    // Adjust search range
    if (midElement < num) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return false;
}
console.log(
  isInMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  isInMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
