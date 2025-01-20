/*You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of money stashed, the only constraint stopping you from robbing 
 each of them is that adjacent houses have security systems connected and
  it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
 return the maximum amount of money you can rob tonight without alerting the police.
*/

function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev1 = 0; // dp[i-1]
    let prev2 = 0; // dp[i-2]
    
    for (const num of nums) {
        const current = Math.max(prev1, num + prev2);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Example usage:
const nums = [2, 7, 9, 3, 1];
console.log(rob(nums)); // Output: 12