// function StockMaximumProfit(array) {
//     let max_profit = -1;
//     let buy_price = 0;
//     let sell_price = 0;
//     let change_buy_index = true;
//     for (let i = 0; i < array.length - 1; i++) {
//         sell_price = array[i + 1];
//         if (change_buy_index) {
//             buy_price = array[i];

//         }
//         if (sell_price < buy_price) {
//             change_buy_index = true;
//             continue;
//         } else {
//             let temp_profit = sell_price - buy_price;
//             if (temp_profit > max_profit) {
//                 max_profit = temp_profit;
//             }
//             change_buy_index = false;
//         }
//     }
//     return max_profit;
// }
// let value = StockMaximumProfit([44, 30, 24, 32, 35, 30, 40, 38, 15]);
// console.log(value);


// function amxSubArray(nums) {
//     let dp = [nums[0]];
//     let max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         const num = nums[i];
//         dp[i] = math.max(num, num + dp[i - 1]);
//         max = math.max(max, dp[i]);
//     }
//     return max;
function maxSubArray(nums) {
    let dp = [nums[0]];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        dp[i] = Math.max(num, num + dp[i - 1]);
        max = Math.max(max, dp[i]);
    }

    return max;
}


// tests
console.log("[-2,1,-3,4,-1,2,1,-5,4] expects 6", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);