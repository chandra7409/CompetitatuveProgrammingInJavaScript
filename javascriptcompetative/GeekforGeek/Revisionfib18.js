function factorial(x) {
    if (x == 1)
        return 1;
    return x * factorial(x - 1);
}
console.log(factorial(5));

//=====fibonnacci series using by recursion==


// function fib(n) {
//     if (n == 0 || n == 1) { //base case
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(6));


// function f(n) {
//     if (n == 1) {
//         console.log(1);
//         return;
//     }
//     f(n - 1);
//     console.log(65);
// }
// f(5);



// function friend(n) {
//     if (n == 1 || n == 2)
//         return n;
//     return fib(n - 1) + (n - 1) * fib(n - 2);
// }
// console.log(friend(5));



// function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal) {

//         if (!events.includes(event)) {
//             events.push(event);
//         }

//     }
//     return events;
// }
// let journal = ["work", "touched tree", "pizza",
//     "running", "television"
// ];
// console.log(journalEvents(journal));







//=============increasing and decreasing order print arrry
// function printIncreasinhgDecreasing(n) {
//     if (n < 1) {
//         return;
//     }
//     console.log(n);
//     //printIncreasinhgDecreasing(n - 1);
//     printIncreasinhgDecreasing(n - 1);
//     console.log(n);
// }
// printIncreasinhgDecreasing(4);


//========Reverse Array============


// function reverse_a_number(n) {
//     n = n + "";
//     return n.split("").reverse().join("");

// }
// console.log(Number(reverse_a_number(32243)));



//========Rotation of Array============


function RotationArray(array, n) {
    let min = array[0],
        min_index = 0;
    for (let i = 1; i < n; i++) {
        if (min > array[i]) {
            min = array[i];
            min_index = i;
        }
    }
    return min_index;



}
let array = [15, 18, 2, 3, 6, 12];
let n = array.length;
console.log(RotationArray(array, n));




//=======================================check string is palindrome or not palindrome================================



// let str = "Amma";
// let i = 0;
// let j = length - 1;
// while (i < j) {
//     if (s[i] != s[j]) {
//         console.log("string is not palindrome");
//     }
//     i = i + 1;
//     j -= 1;
// }
// if (i == j) {
//     console.log("string is a palindrome");
// }


//=============Minimise the maximum difference between heights ===============

//==============Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer.================== 

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {3, 3, 6, 8}. The difference between 
// the largest and the smallest is 8-3 = 5.