// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we
// return [0, 1].


function SumOfPair(arr, target) {
    var map = [];
    var indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] != null) {
            var index = map[arr[i]];
            indexes[0] = index;
            indexes[1] = i;
            break;
        } else {
            map[target - arr[i]] = i;
        }
    }
    return indexes;

}
let arr = [2, 7, 11, 15];
let target = 9;
console.log(SumOfPair(arr, target));