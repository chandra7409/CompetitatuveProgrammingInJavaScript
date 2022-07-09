//====closure in javascript


// let add = function() {
//         let a = 10;
//         //let sum = a + 20;
//         //return sum;
//         function sum() {
//             console.log(a + 30);
//         }
//         return sum;
//     }
//     // console.log(add());
//     // add()();


// let CallAdd = add(); //return sum()
// CallAdd()();





///=======higher order function

// let array = [3, 5, 2, 5, 7, 9];
// let filtered = array.filter(function(element) {
//     return element > 3;
// });
// console.log(filtered);


// console.log(array);
// // array.sort();

// array.sort(function(a, b) {
//     //return b - a;
//     return a - b;

//     //b-a-->positive==b>a
//     //b=a-->negative=>b<a
// })
// console.log(array);

//IIFE  -immediatelly invoked funciotn expression

((name) => {
    console.log("I am a fonction with name", name);

})("IIFE");



// login machism in javascript