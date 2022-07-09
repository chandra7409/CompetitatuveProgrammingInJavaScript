function maxProfit(prices) {
    let maxProfit = 0;
    let leftmin = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < leftmin) {
            leftmin = prices[i];
        }
        maxProfit = Math.max(maxProfit, prices[i] - leftmin);
    }
    return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));