function largestPrimeFactor(n: number): number {
  if (n <= 1) {
    return -1; // No prime factors for numbers <= 1
  }

  let largestFactor = -1;

  // Remove all factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check for odd factors from 3 upwards
  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2; // Increment by 2 to check odd numbers only
  }

  // If n is still greater than 2, then it is prime
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195));
