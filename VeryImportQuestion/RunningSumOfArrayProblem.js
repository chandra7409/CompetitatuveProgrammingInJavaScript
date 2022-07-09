// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]… nums[i]).
// Return the running sum of nums.
// Example 1:
//     Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].


///++++++++++++++++One metheds++++++++++++++
// const runningSum = arr => {
//     arr.reduce((a, c, i, arr) => arr[i] += a)
//     return arr;
// }
// let arr = [1, 2, 3, 4];
// console.log(runningSum(arr));








///++++++++++++Second methods++++++++++++++




function Running(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }

    // return the modified array
    return arr;
}
let arr = [1, 2, 3, 4];
console.log(Running(arr));