//==================another approches of Rotation of Array in 


function shiftCyclically(arr, n) {
    var i = 0
    var j = n - 1
    while (i != j) {
        let temp;

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i = i + 1
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var n = arr.length;

console.log("Given array is <br>");
for (var i = 0; i < n; i++)
    console.log(arr[i] + " ");

shiftCyclically(arr, n);

console.log("<br> Output array is <br>");
for (var i = 0; i < n; i++)
    console.log(arr[i] + " ");







// const RotateArray = function(num1, k) {
//     for (i = 0; i < k; i++) {
//         num1.unshift(num1.pop());

//     }
//     return num1;
// }
// let num = [2, 3, 5, 6, 6];
// console.log(RotateArray(num));

//============ Maximum sum of i*arr[i] among all rotations of a given array


// Input: arr[] = {8, 3, 1, 2}
// Output: 29
// Explanation: Lets look at all the rotations,
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

// function MAxsum(arr, n) {
//     let value = Number.MIN_VALUE;
//     for (let i = 0; i < n; i++) {
//         var curr_sum = 0;
//         for (j = 0; j < n; j++) {
//             var idx = (i + j) % n;
//         }
//         value = Math.max(value, curr_sum);

//     }
//     return value;
// }
// let arr = [8, 3, 1, 2];
// let n = arr.length;
// console.log(MAxsum(arr, n));



//take an array size of 10 and sum using by tail recursion 

// function SumArray(arr, size, sum) {
//     if (size == 0) {
//         return sum;
//     } else {
//         sum += arr[size - 1];
//         return SumArray(arr, size - 1, sum);
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let size = arr.length;
// let sum = 0;
// console.log(SumArray(arr, size, sum));