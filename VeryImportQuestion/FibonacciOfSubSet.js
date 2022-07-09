// Problem Statement
// Given an array.Your task is to find all the elements, which create the Fibonacci series.For example -

//     Input: [1, 14, 3, 19, 10, 13, 7]
// Output: [1, 3, 13]



// function findSubset(arr) {

//     var max = arr.reduce((a, b) => Math.max(a, b))


//     var a = 0,
//         b = 1;
//     var hash = new Set();
//     hash.add(a);
//     hash.add(b);
//     while (b < max) {
//         var c = a + b;
//         a = b;
//         b = c;
//         hash.add(b);
//     }

//     for (var i = 0; i < n; i++)
//         if (hash.has(arr[i]))
//             console.log(arr[i] +
//                 " ")
//}


var arr = [1, 14, 3, 19, 10, 13, 7];


//var max = arr.reduce((a, b) => Math.max(a, b))
//var max = arr.reduce((a, b) => a + b)

var max = arr.reduce((a, b) => a * b);



//var n = arr.length;
console.log(max);