// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output: 
// 5
// Explanation: 
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.



// function getUnion(a, n, b, m) {

//     // Defining set container s
//     var s = new Set();

//     // Inserting array elements in s
//     for (let i = 0; i < n; i++)
//         s.add(a[i]);

//     for (let i = 0; i < m; i++)
//         s.add(b[i]);
//     console.log("Number of elements after union operation: " + s.size + "<br>");
//     console.log("The union set of both arrays is :");
//     console.log("<br>");
//     var arr = [];
//     for (let itr of s)
//         arr.push(itr);
//     // s will contain only distinct
//     // elements from array a and b
//     arr.sort(function(a, b) { return a - b; })
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + " ");
//     }
// }

// // Driver Code

// let a = [1, 2, 5, 6, 2, 3, 5, 7, 3];
// let b = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4];

// getUnion(a, 9, b, 10);



// Find the Rotation Count in Rotated Sorted array


// Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.
// Examples: 


// Input : arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2
// Explanation : Initial array must be {2, 3,
// 6, 12, 15, 18}. We get the given array after 
// rotating the initial array twice.

// function countRotations(arr, n)
//     {
//         // We basically find index of minimum
//         // element
//         let min = arr[0], min_index = -1;
//         for (let i = 0; i < n; i++)
//         {
//             if (min > arr[i])
//             {
//                 min = arr[i];
//                 min_index = i;
//             }
//         }
//         return min_index;
//     }

// // Driver Code

//     let arr = [15, 18, 2, 3, 6, 12];
//     let n = arr.length;

// function CountRotation(arr, n) {
//     let min = arr[0],
//         min_index = -1;
//     for (let i = 0; i < n; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//             min_index = i;


//         }
//     }
//     return min_index;
// }
// const arr = [15, 18, 2, 3, 6, 12];
// let n = arr.length;
// console.log(CountRotation(arr, n));

//============Find k pairs with smallest sums in two arrays

// Given two integer arrays arr1[] and arr2[] sorted in ascending order and an integer k. Find k pairs with smallest sums such that one element of a pair belongs to arr1[] and other element belongs to arr2[]
// Examples: 

// Input :  arr1[] = {1, 7, 11}
//      arr2[] = {2, 4, 6}
//      k = 3
// Output : [1, 2],
//      [1, 4],
//      [1, 6]

// function kSmallestPair(arr1, n1, arr2, n2, k) {
//     if (k > n1 * n2) {
//         console.log("k pairs don't exist");
//         return;
//     }


//     let index2 = new Array(n1);
//     index2.fill(0);

//     while (k > 0) {
//         // Initialize current pair sum as infinite
//         let min_sum = Number.MAX_VALUE;
//         let min_index = 0;

//         for (let i1 = 0; i1 < n1; i1++) {
//             // Check if current element of arr1[] plus
//             // element of array2 to be used gives minimum
//             // sum
//             if (index2[i1] < n2 &&
//                 arr1[i1] + arr2[index2[i1]] < min_sum) {
//                 // Update index that gives minimum
//                 min_index = i1;

//                 // update minimum sum
//                 min_sum = arr1[i1] + arr2[index2[i1]];
//             }
//         }

//         console.log("(" + arr1[min_index] + ", " +
//             arr2[index2[min_index]] + ") ");

//         index2[min_index]++;

//         k--;
//     }
// }

// let arr1 = [1, 3, 11];
// let n1 = arr1.length;

// let arr2 = [2, 4, 8];
// let n2 = arr2.length;

// let k = 4;
// kSmallestPair(arr1, n1, arr2, n2, k);



//================k-th smallest absolute difference of two elements in an array



// We are given an array of size n containing positive integers. The absolute difference between values at indices i and j is |a[i] – a[j]|. There are n*(n-1)/2 such pairs and we are asked to print the kth (1 <= k <= n*(n-1)/2) the smallest absolute difference among all these pairs.
// Examples: 

// Input  : a[] = {1, 2, 3, 4}
//      k = 3
// Output : 1
// The possible absolute differences are :
// {1, 2, 3, 1, 2, 1}.
// The 3rd smallest value among these is 1.


// function countPairs(a, n, mid) {
//     let res = 0;
//     for (let i = 0; i < n; i++) {

//         let ub = upperbound(a, n,
//             a[i] + mid);
//         res += (ub - (i));
//     }
//     return res;
// }

// function upperbound(a, n, value) {
//     let low = 0;
//     let high = n;
//     while (low < high) {
//         let mid = (low + high) / 2;
//         if (value >= a[mid])
//             low = mid + 1;
//         else
//             high = mid;
//     }

//     return low;
// }

//================ Returns k-th absolute
// difference
// function kthDiff(a, n, k) {
//     // Sort array
//     a.sort((a, b) => a - b);

//     // Minimum absolute
//     // difference
//     let low = a[1] - a[0];
//     for (let i = 1; i <= n - 2; ++i)
//         low = Math.min(low, a[i + 1] -
//             a[i]);

//     // Maximum absolute
//     // difference
//     let high = a[n - 1] - a[0];

//     // Do binary search for
//     // k-th absolute difference
//     while (low < high) {
//         let mid = (low + high) >> 1;
//         if (countPairs(a, n, mid) < k)
//             low = mid + 1;
//         else
//             high = mid;
//     }

//     return low;
// }

// // Driver code

// let k = 3;
// let a = [1, 2, 3, 4];
// let n = a.length;
// console.log(kthDiff(a, n, k));


//===================================find the pair of the sum the Rotate Array=== 
// Javascript program to find a
// pair with a given sum in a
// sorted and rotated array

// This function returns true if arr[0..n-1]
// has a pair with sum equals to x.
// function pairInSortedRotated(arr, n, x) {

//     // Find the pivot element
//     let i;
//     for (i = 0; i < n - 1; i++)
//         if (arr[i] > arr[i + 1])
//             break;

//         // l is now index of                                         
//         // smallest element         
//     let l = (i + 1) % n;

//     // r is now index of largest
//     // element                  
//     let r = i;

//     // Keep moving either l or
//     // r till they meet
//     while (l != r) {

//         // If we find a pair with sum x, we
//         // return true
//         if (arr[l] + arr[r] == x)
//             return true;

//         // If current pair sum is less, move
//         // to the higher sum
//         if (arr[l] + arr[r] < x)
//             l = (l + 1) % n;

//         // Move to the lower sum side      
//         else
//             r = (n + r - 1) % n;
//     }
//     return false;
// }

// // Driver code
// let arr = [11, 15, 6, 8, 9, 10];
// let sum = 16;
// let n = arr.length;

// console.log(pairInSortedRotated(arr, n, sum));



//=============================Given two sorted arrays, a[] and b[], the task is to find the median of these sorted arrays, in O(log n + log m) time complexity, when n is the number of elements in the first array, and m is the number of elements in the second array. 
// This is an extension of median of two sorted arrays of equal size problem. Here we handle arrays of unequal size also.

// Example: 

// Input: array1[] = {-5, 3, 6, 12, 15}
//         array[] = {-12, -10, -6, -3, 4, 10}
// Output : The median is 3.
// Explanation : The merged array is :
//         ar3[] = {-12, -10, -6, -5 , -3,
//                  3, 4, 6, 10, 12, 15},
//        So the median of the merged array is 3



function GetMedianNumber(array1, array, n, m) {

    let i = 0;
    let j = 0;
    let count;
    let m1 = -1,
        m2 = -1;

    if ((m + n) % 2 == 1) {
        for (count = 0; count <= (n + m) / 2; count++) {
            if (i != n && j != m) {
                m1 = (array1[i] > array[j]) ?
                    array[j++] : array1[i++];
            } else if (i < n) {
                m1 = array1[i++];
            }

            // For case when j<m,
            else {
                m1 = array[j++];
            }
        }
        return m1;
    } else {
        for (count = 0; count <= (n + m) / 2; count++) {
            m2 = m1;
            if (i != n && j != m) {
                m1 = (array1[i] > array[j]) ?
                    array[j++] : array1[i++];
            } else if (i < n) {
                m1 = array1[i++];
            }

            // For case when j<m,
            else {
                m1 = array[j++];
            }
        }
        return (m1 + m2) / 2;
    }
}

// Driver code
let array1 = [900];
let array = [5, 8, 10, 20];

let n1 = array1.length;
let n2 = array.length;
console.log(GetMedianNumber(array1, array, n1, n2));