//Write code for finding the smallest element in an array


let small = [14, 58, 20, 77, 66, 82, 42, 67, 42]
let max = Math.max(...small)
console.log(max);
Array.max = function(arr) {
    return Math.max.apply(Math, arr);
};