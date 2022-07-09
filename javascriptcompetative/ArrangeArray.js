// const array = [0, 5, 63, -2, -9, -9, 3, 4, -1];
// const resultarray = [];
// array.filter((i) => {
//     if (i < 0) {
//         resultarray.push(i);
//     }
// })

// array.filter((i) => {
//     if (i >= 0) {
//         resultarray.push(i);
//     }
// })
// console.log(resultarray);

//for each loop in array


//const arra = [11, 2, 4, 5, -56, -3, -204, 6];
// arra.forEach(function(i) {
//     console.log(i);
// })

// let check_value = arra.filter((value) => {
//     if (value >= 0) {
//         console.log(value, "is positive")
//     } else {
//         console.log(value, "is Negative")
//     }

// });
// check_value;


// ///
// const arr = [1, 2, 4, 5, 256, 45];
// //Sort
// arr.sort((a, b) => a - b);
// console.log(`Largest value : ${arr[arr.length-1]}`);
// const arr1 = [1, 2, 4, 5, 256, 45];
// //second approach
// let maxValue = -1;
// arr1.forEach((i) => {
//     if (arr1[i] > maxValue) {
//         maxValue = arr1[i];
//     }
// })
// console.log(maxValue);


// Pure function us ei  array
// let square = (num) => num * num;
// let n = 2;
// console.log("n = ${n} and squre = ${square(num)}");



//Impure function in array  of square
// const arra = [1, 2, 3, 4, 5];
// let squareArray = (arra) => {
//     for (let i = 0; i <= arra.length; i++) {
//         arra = arra[i] * arra[i];
//     }
// }
// squareArray(arra);
// console.log(arra);



//prime palindrome in javascript


// 

//matxice
let setZeroes=function(mattrix){
 let index = [];
    for(let i =0;i<matrix[i].length;i++){
        for(let a =0;i<matrix[i].length;i++){
            if(matrix[i][a] == 0){
                let temp = [i,a];
                index.push(temp);
            }
        }
    }
    
    for(let i = 0;i<index.length;i++){
        let x = index[i][0];
        let y = index[i][1];
        for(let a = 0;a<x;a++){
            mattrix[]
        }
    }
}