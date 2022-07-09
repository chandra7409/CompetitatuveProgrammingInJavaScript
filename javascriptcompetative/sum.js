// let n = 5;
// let str = "";
// for (let row = 1; row <= 5; row++) {
//     for (let startcount = row; startcount >= 1; startcount--) {
//         str = str + "*";
//     }
//     str = str + "\n";

// }
// console.log(str);


// let n = 5;
// let str = "";
// for (let row = 1; row <= 5; row++) {
//     for (let startcount = 1; startcount <= n; startcount--) {
//         str = str + "*";
//     }
//     str = str + "\n";

// }
// console.log(str);



//sum of the numebr
// let num1 = 5412;
// let sum1 = 0;
// while (num1 > 0) {
//     let lastdigit = num1 % 10;
//     sum1 = sum1 + lastdigit;
//     num1 = parseInt(num1 / 10);
// }
// console.log(sum1);
// //original number
// let numoriginal = 371;
// let num = numoriginal;
// let numdigit = 0;
// while (num > 0) {
//     let lastdigit = num % 10;
//     numdigit++;
//     num = parseInt(num / 10);

// }
// console.log(numdigit);

// let sum = 0;
// num = numoriginal;
// while (num > 0) {
//     let lastdigit = num % 10;
//     sum = sum + Math.pow(lastdigit, numdigit);
//     num = parseInt(num / 10);
//     console.log(sum);
//     let result = sum == numoriginal ? "armstrong Numbers" : "not an armstrong number";
//     console.log(result);
// }


// var getConcatenation = function(nums) {

//     let ans = [];
//     let temp = 0;

//     for (let i = 0; i < nums.length; i++) {
//         nums.push(nums[i]);
//     }

//     return nums;
// };
//
var runningSum = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let element = 0;
        for (let j = 0; j <= i; j++) {
            element += nums[j];
        }
        output.push(element);
        element = 0;
    }
    return output;
}
let arr = [2, 3, 4, 5, 5, 67, 8];
console.log(runningSum(arr, 10));