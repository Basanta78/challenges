/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.
 */


function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let count = 0;

    // Step 1: Find a candidate for the majority element
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Step 2: Verify that the candidate is indeed the majority element
    let verifyCount = 0;
    for (const num of nums) {
        if (num === candidate) {
            verifyCount++;
        }
    }

    return verifyCount > Math.floor(nums.length / 2) ? candidate : -1;
}

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2