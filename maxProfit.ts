/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/



function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE; // Initialize minimum price as a very large number
    let maxProfit = 0; 

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate the profit if selling at the current price
            const profit = price - minPrice;
            // Update the maximum profit
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (Buy on day 2, sell on day 5)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No profit possible)