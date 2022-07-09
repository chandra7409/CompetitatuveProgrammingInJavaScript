/**
 * Count Array Pairs Divisible by K
 *
 * Given a 0-indexed integer array nums of length n and an integer k,
 * return the number of pairs (i, j) such that:
 *
 * 0 <= i < j <= n - 1 and
 * nums[i] * nums[j] is divisible by k.
 *
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i], k <= 10^5
 *
 *
 * Two Sum:
 * Count all the pairs in the array which sum up to k
 *
 * nums[i] + nums[j] = k
 *
 * map = {2, }
 * nums = [1,2,3,0], k = 3
 * Index pairs - (0,1) (2,3)
 * count = 2
 *
 * Optimized approach
 *
 * maintain a O(1) data sructure
 *
 * map = {2, }
 *
 * nums[i] + nums[j] = k
 * nums[j] = k - nums[i]
 *
 *
 * i = 0, k = 3
 * [1,2,3,0]
 * count = 0
 *
 * i = 1, k = 3
 * [1,2,3,0]
 * count = 1
 *
 * map = {2, 0}
 * i = 2, k = 3
 * [1,2,3,0]
 * count = 1
 *
 *
 * map = {2, 0}
 * i = 3, k = 3
 * [1,2,3,0]
 * count = 2
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5], k = 2
 * Output: 7
 *
 * Explanation:
 * The 7 pairs of indices whose corresponding products are divisible by 2 are
 * (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).
 * Their products are 2, 4, 6, 8, 10, 12, and 20 respectively.
 * Other pairs such as (0, 2) and (2, 4) have products
 * 3 and 15 respectively, which are not divisible by 2.
 *
 *
 * Find the count of all pairs i,j such that
 * (nums[i] * nums[j] % k) == 0
 *
 * 1 <= i < j <= nums.length
 *
 *                 i
 * nums = [1,2,3,4,5]
 * k = 3
 *
 * i = 0
 *   j will go to 1-4
 *
 * i = 1
 *  j will go to 2-4
 *
 *
 *
 *  0 1 2 3 4
 * [1,2,3,4,5]
 * n = 5
 * n-1 = 4
 *
 * for i=0; i<n-1; i++
 *
 * i = {0,1,2,3,}
 *
 *
 * []
 *
 *
 *
 * Algo:
 * count = 0
 * if nums[i] == 1
 *      while(nums[j]%k == 0)
 * else if (nums[i] == k){
 *      count  += n - i
 * }
 *
 * 1. Iterate through array, find number of array elements divisible by k (count)
 * ((n-1) * count) - ((count * (count-1))/2)
 *
 * nums = [1,2,3,4,5], k = 2
 *
 * count = 2
 * ((n-1) * count) = 8
 * C(count, 2) = 1
 *
 * 8 - 1 = 7
 *
 * nums = [1,2,3,4], k = 5
 * count = 0
 *
 * output = 0
 *
 * GCD (HCF):
 *
 * 6, 12 -> 6
 * 3, 5 -> 1
 *
 * Euclidean algorithm
 *
 * gcd (6, 12) -> 6
 * gcd(3, 5) -> 1
 *
 *
 *
 *
 *
 *
 *
 * 1. nums[i] * nums[j] is divisible by k.
 * 2. gcd(nums[i], k) * gcd(nums[j], k) % k == 0
 *
 *
 * nums[i] = 6
 * nums[j] = 12
 * k = 3
 * 6 = 2 * 3
   3 = 3
 *
  12 = 2 * 2 * 3
  3 = 3

 * gcd(6, 3) * gcd(12, 3) % 3 = 0?
 * (3 * 3) % 3 == 0?
 *
 *
 *
 * nums[i] = 3
 * nums[j] = 5
 * k = 4
 * 
 * 
 *
 * 3 * 5 = 15 % 4 = 3
 * gcd(3, 4) * gcd(5, 4) % 4 
 *  1 * 1 % 4
 *  1 % 4 = 1
 *
 *
 * gcd(nums[i], k) * gcd(nums[j], k) % k == 0
 *
 *
 * nums[i] = 11 * 5 * 2 * 3 * 2 * 23
 * nums[j] = 71 * 13 * 3 * 7 * 2
 * k = 23 * 3 * 2
 * 
 * nums[i] / k = 11 * 5 * 2
 * 
 * nums[i] = 10^5
 * k = 2
 * map - (50000, )
 * 
 * 10^5 -> sqrt(10^5)
 *
 * 10^5 * 10^5 = 10^10
 * 10^5 * 300 = 3 * 10^7
 *
 *
 * n^2 -> n^1.5
 *
 *
 *
 *
 *
 *
 */

// too slow
var countPairsTwoLoops = function(nums, k) {
    // the size of array
    let n = nums.length;
    // the final result to return
    let res = 0;
    // (i < n) -> n-1
    // (i < n-1) -> n-2
    // 'i' will control the nums[i]
    for (let i = 0; i < n - 1; i++) {
        // 'j' will control the nums[j]
        for (let j = i + 1; j < n; j++) {
            // check if the product is divisible by k
            if ((nums[i] * nums[j]) % k === 0) {
                // increment count
                res++;
            }
        }
    }
    return res;
};

// misses some pairs
var countPairs = function(nums, k) {
    let count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] % k == 0) {
            count++;
        }
    }
    //                        choose 2 elements divisible by k
    let res = (n - 1) * count - (count * (count - 1)) / 2;
    return res;
};

/**
 *
 * {
 *      'userid' : 1
 * }
 * nums = [1,2,3,4,5], k = 2
 * i = 3
 * map = {1: 2, 2: 2}
 * res = 7
 *
 * gcdOfNo1 = gcd(5, 2) = 1
 * gcdOfNo1 * gcdOfNo2 % k == 0
 * 1 * 1 % 2 != 0
 * 1 * 2 % 2 = 0
 *
 */
var countPairs = function(nums, k) {
    function gcd(a, b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    // the final answer
    let res = 0;
    // O(1) access data structure
    let gcdMap = {}; // simple JS object
    // iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // gcd of nums[i], k
        // nums[i] = 4, k = 2, gcd = 2
        let gcdOfNo1 = gcd(nums[i], k);
        // iterating over the map
        // gcdMap = {1: 1, 2: 3}
        for (const [gcdOfNo2, cnt] of Object.entries(gcdMap)) {
            if ((gcdOfNo1 * gcdOfNo2) % k == 0) {
                // there is a pair with product div by k
                res += cnt;
            }
        }
        // add in the gcdMap
        if (gcdMap[gcdOfNo1] !== undefined) {
            // if it does exist, increment
            gcdMap[gcdOfNo1]++;
        } else {
            // add a new element as 1
            gcdMap[gcdOfNo1] = 1;
        }
    }
    return res;
};

console.log(countPairsTwoLoops([1, 2, 3, 4, 5], 2));
// // 7: 03
// // Code
// // for Thursday 's doubt session (edited) 


// // Kshitij Kotasthane
// // 8: 04 PM
// // @everyone Please find the code from today 's session -
// //     




// /*Non - decreasing Array(Medium *
//         *
//         Given an array nums with n integers, *
//         your task is to check
//         if it could become a *
//         non - decreasing array by modifying(change it to any other integer) *
//         at most one element(zero or one element).*
//         *
//         Output - > true / false *
//         *
//         We define an array is non - decreasing *
//         if nums[i] <= nums[i + 1] holds
//         for every i(0 - based) such that(0 <= i <= n - 2).*
//         *
//         *
//         Let 's first consider only distinct elements: *
//         nums = [1, 2, 3, 4, 5](increasing)(nums[i] < nums[i + 1],
//             for i = 0 to n - 1) *
//         nums = [5, 4, 3, 2, 1](decreasing)(nums[i] > nums[i + 1],
//             for i = 0 to n - 1) *
//         *
//         What
//         if duplicates are allowed ?
//         *
//         nums = [1, 2, 3, 3, 5](non - decreasing)(nums[i] <= nums[i + 1],
//             for i = 0 to n - 1) *
//         *
//         _ _ _ /
//         *
//         / * / *
//         / * * *
//         nums = [5, 5, 3, 2, 1](non - increasing)(nums[i] => nums[i + 1],
//             for i = 0 to n - 1) *
//         *
//         *
//         \-- --
//         *
//         \
//         *
//         \
//         *
//         \
//         *
//         *
//         *
//         *
//         *
//         *
//         *
//         Constraints :
//         *
//         n == nums.length *
//         1 <= n <= 10 ^ 4 *
//         -10 ^ 5 <= nums[i] <= 10 ^ 5 *
//         *
//         *
//         *
//         *
//         Example 1:
//         *
//         Input: nums = [4, 2, 3] *
//         Output: true *
//         *
//         *
//         Inversion:
//         *
//         nums[i] > nums[i + 1] *
//         *
//         0 1 * [4, 2, 3] - > [0, 2, 3] *
//         - > [1, 2, 3] *
//         - > [2, 2, 3] *
//         or pick negatives *
//         *
//         *
//         Example 2:
//         *
//         Input: nums = [4, 2, 1](non - increasing / decreasing) *
//         Output: false *
//         *
//         *
//         [4, 2, 1] *
//         *
//         nums[0] = nums[1] * [2, 2, 1], changed = true *
//         *
//         *
//         i = 1 *
//         let changed = false; *
//         *
//         *
//         *
//         for i = 0; i < nums.length - 1; i++
//         *
//         if (nums[i] > nums[i + 1] && changed !== true) { *
//             nums[i] = nums[i + 1]; *
//             changed = true; *
//         } *
//         if (nums[i] > nums[i + 1] && changed === true) { *
//             return false; *
//         } *
//         *
//         *
//         [4, 2, 1] - > change 4 * [2, 2, 1] *
//         - > change 2 * [4, 0, 1] *
//         *
//         *
//         *
//         *
//         *
//         *
//         *
//         Example 3:
//         *
//         Input: nums = [3, 9, 1] *
//         Output: true *
//         *
//         *
//         [5, 6, 6] *
//         *
//         *
//         [3, 9, 1] - > change 3 * [0, 9, 1] *
//         - > change 9 * [] *
//         i = 2 *
//         nums[i - 1] > nums[i] *
//         nums[i - 2] > nums[i] *
//         nums[i - 2] < nums[i - 1] *
//         - > change 1 * [3, 9, 9] *
//         *
//         *
//         *
//         *
//         *
//         Cases:
//         *
//         If
//         for all i, nums[i] <= nums[i + 1], zero operations are needed.*Otherwise one or operations are needed *
//         1.[1, 4, 1] - > [1, 1, 1] *
//         If you are dealing with nums[i] and nums[i + 1], make sure not to disturb *
//         nums[i - 1].*
//         *
//         Approach:
//         *
//         1. Iterate over the array(i = 0 to nums.length - 1), and
//         try to check.*2.
//         if (nums[i] > nums[i + 1] && changed !== true)
//             *
//             modify and set changed *
//             3.
//         if (nums[i] > nums[i + 1] && changed === true)
//             *
//             return false *
//                 *
//                 *
//                 *
//                 *
//                 *
//                 Example 4:
//                 *
//                 Input: nums = [3, 2, 3, 4] *
//                 Output:
//                 *
//                 *
//                 i = 0 *
//                 changed = false * [2, 2, 3, 4] *
//                 *
//                 *
//                 i = 1 *
//                 changed = true * [2, 2, 3, 4] *
//                 *
//                 *
//                 i = 2 *
//                 changed = true * [2, 2, 3, 4] *
//                 *
//                 *
//                 /

//         var checkPossibility = function(nums) {
//             let changed = false;
//             // iterate until the second last element
//             for (let i = 0; i < nums.length - 1; i++) {
//                 // if already non-decreasing, do nothing
//                 if (nums[i] <= nums[i + 1]) {
//                     continue;
//                 }
//                 // if there is an inversion in the array and there needs to be amodification
//                 // but one element is already modified
//                 if (changed === true) {
//                     return false;
//                 }
//                 // check if
//                 // [1,1,1], changed = false, i = 1
//                 if (i == 0 || nums[i + 1] >= nums[i - 1]) {
//                     nums[i] = nums[i + 1];
//                 } else {
//                     nums[i + 1] = nums[i];
//                 }
//                 changed = true;
//             }
//             return true;
//         }