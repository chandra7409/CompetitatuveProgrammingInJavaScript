A = [1, 4, 15, 6, 10, 8];
x = A.length;


function find3Numbers(A, x) {
    for (i = 0; i < (x - 2); i++) {
        for (j = i + 1; j < (x - 1); j++) {
            for (k = j + 1; x; k++) {
                if (A[i] + A[j] + A[k] == 0) {
                    console.log(A[i]);
                    console.log(A[j]);
                    console.log(A[k]);
                    return true
                }
                return 0;
            }
        }
    }
}

console.log(find3Numbers(A, x));


// function find3Numbers(A, arr_size, sum) {
//     let l, r;

//     // Fix the first element as A[i]
//     for (let i = 0; i < arr_size - 2; i++) {

//         // Fix the second element as A[j]
//         for (let j = i + 1; j < arr_size - 1; j++) {

//             // Now look for the third number
//             for (let k = j + 1; k < arr_size; k++) {
//                 if (A[i] + A[j] + A[k] == sum) {
//                     console.log("Triplet is " + A[i] +
//                         ", " + A[j] + ", " + A[k], "=", sum);
//                     return true;
//                 }
//             }
//         }
//     }

//     // If we reach here, then no triplet was found
//     return false;
// }

// /* Driver code */

// let A = [1, 4, 45, 6, 10, 8];
// let sum = 22;
// let arr_size = A.length;
// find3Numbers(A, arr_size, sum);


// let Array = [1, 4, 45, 6, 10, 8];
// let sum = 15;
// let x = Array.length;

// function TripltSum(Array, x, sum) {
for (let i = 0; i < (x - 2); i++) {
    for (let j = i + 1; j < (x - 1); j++) {
        for (let k = j + 1; x; k++) {
            if (Array[i] + Array[j] + Array[k] == sum) {
                console.log(Array[i]);
                console.log(Array[j]);
                console.log(Array[k]);
                return true;
            }
        }
        return false;



    }
}
// }

// console.log(TripltSum(Array, x, sum));


// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((prod, curr) => prod * curr, 1);
// console.log(res);


// let arr = [5, 4, 3, 6, 4, 2];
// let smallestElem = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestElem) {
//         smallestElem = arr[i];
//     }
// }
// console.log("Smallest element in array is ", smallestElem);