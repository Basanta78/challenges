/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost,
 you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    const dp: number[] = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 0; // Cost to start from step 0
    dp[1] = 0; // Cost to start from step 1

    // Fill the dp array
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[n];
}

// Example usage:
const cost1 = [10, 15, 20];
console.log(minCostClimbingStairs(cost1)); // Output: 15 (Start from step 1, pay 15)

const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost2)); // Output: 6 (1 + 1 + 1 + 1 + 1 + 1)