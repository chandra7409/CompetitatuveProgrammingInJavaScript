// // First will divide the array into four parts. Part one containing the zeros, second part containing the ones, third part containing the values 
// // which can be zero, one or two and the last part containing two. If the element in third part is zero will move it to the first part and reduce 
// // the size of third part, if the element is one will reduce only the size of third part and if the element is two will move it to the fourth part 
// // and reduce the size of third part. 



// // Algorithm
// // 1) We will have three indices start=0,mid=0,end=N and there are four parts 
// // (0,start):the elements here will be 0
// // (start,mid):the elements here will be 1
// // (mid,end):the elements here can be 0,1,2
// // (end,N):the elements here will be 2
// // Where N = size of the array
// // 2) We will be traversing the array from start to end until mid is less than end
// // 3) If the mid element is 0 will swap element at start index with mid and increment both mid and start by one
// // 4) If the element is 1, increment the mid by one.
// // 5) If the element is 2,will swap with the element at index end and decrement the value of end by one
// // 6) We will continue doing this till the mid value is less than the end.

let input = [1, 1, 1, 2, 2, 0, 0, 0];
let size = input.length;

function Zero(input, size) {
    let start = 0;
    let mid = 0;
    let end = size - 1;
    while (mid <= end) {

        if (input[mid] == 0) {


            Swap = input[start];
            input[start] = input[mid];
            input[mid] = Swap;
            mid++;
            start++;
        } else if (input[mid] == 1) {
            mid++;

        } else {
            Swap = input[end];
            input[end] = input[mid];
            input[mid] = Swap;
            end--;
        }
    }
    return input;
}
var output = Zero(input, size);
console.log(output);

// let code = (arrs) => {
//     let len = arrs.length;
//     let cone = 0,
//         cT = 0,
//         ctr = 0;
//     for (let i = 0; i < len; i++) {
//         if (arrs[i] == 0) {
//             cone++;
//         } else if (arrs[i] == 1) {
//             cT++;
//         } else if (ctr[i] == 2) {
//             ctr++;
//         }
//     }
//     for (let i = 0; i < cone; i++) {
//         arrs[i] = 0;
//     }
//     for (let i = cone; i < len; i++) {
//         arrs[i] = 1;
//     }
//     for (let i = cT; i < len; i++) {
//         arrs[i] = 2;
//     }
//     return arrs;
// }


// let arrs = [1, 1, 1, 2, 2, 0, 0, 0];
// console.log(code(arrs));












// let A = [0, 1, 2, 4, -3, -2, 5, 6];
// let X = 11;

// function targetSumTriplet(A, X) {
//     var ans = [];
//     for (i = 0; i < A.length; i++) {
//         let m = new Set();
//         for (let j = i + 1; j < A.length; j++) {
//             let rem = X - A[i] - A[j];
//             if (m.has(rem)) {
//                 ans.push(A[i]);
//                 ans.push(A[j]);
//                 ans.push(X - A[i] - A[j]);
//                 return ans;
//             } else {
//                 m.add(A[j]);
//             }

//         }
//     }
//     return arguments;
// }
// var output = targetSumTriplet(A, X);
// console.log(output);



//====================Water Rain trapping============



// an array of non negative integers representing the height of each block where 
// the width of each block is 1, we need to find out maximum rain water that can be 
// trapped using blocks.
// Example:
// Input: {3,0,3}
// Output: 3 as three units of water can be stored between this two blocks.
// Approach: There are many approaches for this problem. Will discuss each one of 
// them one by one.



// Approach 1:
// We will traverse the array from start to end and for each element will find the highest bars on left of this element and right of 
// this element. So the amount of water it can store will be the minimum of left and right height blocks-height of the current 
// block 
// Algorithm:
// 1) Traverse the array from beginning to end
// 2) For each element iterate the array from start to present element and find the highest block in left,similarly start from current 
// element index to end and find the highest block in right
// 3) The amount of water that can be current stored for current block is min(left,right)-current block height
// 4) We will have a variable to store the sum of water for all the elements of array


// let A = [3, 0, 2, 0, 4];

// function trapWater(A) {
//     let ans = 0;
//     for (let i = 1; i < A.length; i++) {
//         let left = A[i];
//         for (let j = 0; j < i; j++) {
//             left = Math.max(left, A[j]);

//         }
//         let right = A[i];
//         for (let j = i + 1; j < A.length; j++) {
//             right = Math.max(right, A[j]);

//         }
//         ans = ans + Math.min(left, right) - A[i];
//     }
//     return ans;
// }
// let output = trapWater(A);
// console.log(output);



//=================Rain water trapping------====
// let A = [3, 0, 2, 0, 4, 5, 7, 0, 9];

// function trapWater(A) {
//     let ans = 0;
//     let n = A.length;
//     let max_left = 0;
//     let max_right = 0;
//     let l1 = 0;
//     let hi = n - 1;
//     while (l1 < hi) {
//         if (A[l1] < A[hi]) {
//             if (max_left < A[l1])
//                 max_left = A[l1];
//             ans += max_left - A[l1];
//             l1++;
//         } else {
//             if (max_right < A[hi])
//                 max_right = A[hi];
//             ans += max_right - A[hi];
//             hi--;
//         }
//     }
//     return ans;


// }

// let output = trapWater(A);
// console.log(output);




// //================Find element that occurs once in the array where rest 
// //===========of the element appear twice-------------============

// // Second approach: will be to create a hash table to store the array elements as key and count of the element as its 
// // value.Traverse the array again and return the element with count one 
// // Time Complexity:O(N)
// // As we are traversing the array twice,once for storing in hash table and second time for checking the element with count 
// // one,so the complexity will be O(N)
// // Space Complexity:O(N)
// // As we are storing array elements in hash table so the space complexity will be O(N)
// // Best approach: will be to use some properties of XOR which are as follows.
// // 1) XOR of a number with itself returns 0
// // Eg: 3 XOR 3 = 0
// // 2) XOR of a number with 0 return the number itself
// // Eg: 3 XOR 0 = 3
// // If there are elements in pairs in the array leaving one element, if we do the XOR of all the elements present in the array, 
// // pairwise elements will return 0 and the XOR of a single occurrence element with 0 will return the single occurrence 
// // element.
// // Algorithm:
// // 1) Traverse the array from start to end and take


// // let V = [3, 4, 5, 5, 4, 2, 2, 3, 1, -1, -1];

// // function Findsing(V) {
// //     let ans = 0;
// //     for (let i = 0; i < V.length; i++) {
// //         ans = ans ^ V[i];




// //     }
// //     return ans;

// // }
// // let out = Findsing(V);
// // console.log(out);




// //######################## Minimum Absolute Difference-----------

// // Given an array of integers and we need to find all the pairs in the array which have the minimum absolute difference and 
// // return the array
// // Example:
// // Input: [3,4,5,5,4,2,2,3,1,-1,-1];
// // Output: [ [-1,-1], [2,2], [3,3], [4,4], [5,5] ]

// let S = [3, 4, 5, 5, 4, 2, 2, 3, 1, -1, -1];
// let minimumAbsoluteDirence = function(arr) {
//     arr.sort((a, b) => a - b);
//     let ans = [];
//     let diff = Number.MAX_SAFE_INTEGER;
//     for (let i = 1; i < arr.length; i++) {
//         let abso = Math.abs(arr[i] - arr[i - 1]);
//         if (diff > abso) {
//             diff = abso;
//             ans.length = 0;

//         }
//         if (diff == abso) {
//             ans.push(arr[i - 1], arr[i]);
//         }
//     }
//     return ans;


// };
// let out = minimumAbsoluteDirence(S);
// console.log(out);