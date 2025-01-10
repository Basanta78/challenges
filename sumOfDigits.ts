/*
Write a TypeScript function that takes a number as an input and returns the sum of its digits.
 You should handle both positive and negative numbers, treating the negative sign as non-existent.
 */

 function sumOfDigits(num: number): number {
    // Convert the number to its absolute value to ignore the negative sign
    const absoluteNum = Math.abs(num);

    // Convert the number to a string, split into individual digits, and sum them up
    const digits = absoluteNum.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    return sum;
}

// Example usage:
console.log(sumOfDigits(123));   // Output: 6 (1 + 2 + 3)
console.log(sumOfDigits(-456));  // Output: 15 (4 + 5 + 6)
console.log(sumOfDigits(0));     // Output: 0
