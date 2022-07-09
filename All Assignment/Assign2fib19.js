//Write a JavaScript program for binary search.
//Sample array: [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5'


// Array.prototype.br_search = function(target) {
//     let mid = parseInt(this.length / 2);
//     if (target === this[mid]) {
//         return mid;

//     }
//     if (target > this[mid]) {
//         return mid + this.slice(mid, this.length).br_search(target);
//     } else {
//         return this.slice(0, mid).br_search(target);
//     }
// };
// arr = [0, 1, 2, 3, 4, 5, 6];
// console.log(arr.br_search(5));

"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter the name :");
console.log(`Hello ${name}`);