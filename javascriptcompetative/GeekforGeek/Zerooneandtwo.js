// Javascript program to sort an array of 0, 1 and 2 

// Sort the input array, the array is assumed to 
// have values in {0, 1, 2} 
// function sor012(a, arr_size) {

//     let lo = 0;
//     let hi = arr_size - 1;
//     let mid = 0;
//     let temp = 0;
//     while (mid <= hi) {
//         if (a[mid] == 0) {
//             temp = a[lo];
//             a[lo] = a[mid];
//             a[mid] = temp;
//             lo++;
//             mid++;
//         } else if (a[mid] == 1) {
//             mid++;
//         } else {
//             temp = a[mid];
//             a[mid] = a[hi];
//             a[hi] = temp;
//             hi--;
//         }

//     }
// }

/* Utility function to print array arr[] */
// function Array012(arr, arr_size) {
//     let i;
//     for (i = 0; i < arr_size; i++) {
//         console.log(arr[i] + " ");
//     }
//     console.log("<br>");
// }

/*Driver function to check for above functions*/
// let arr = [0, 2, 1, 2, 0];

// let arr_size = arr.length;
// sor012(arr, arr_size);
// console.log("Array after seggregation <br>")
// Array012(arr, arr_size);



//anotyher type of problem 0's and 1's and 2's   as [0,1,1,0,2,2,0,1,0,2,]


let code = (arr) => {
    let len = arr.length;
    let countzero = 0,
        countone = 0,
        counttwo = 0;
    for (i = 0; i <= len; i++) {
        if (arr[i] == 0) {
            countzero++;
        } else if (arr[i] == 1) {
            countone++;
        } else if (arr[i] == 2) {
            counttwo++;
        }

    }
    for (let i = 0; i < countzero; i++) {
        arr[i] = 0;
    }
    for (let i = countone; i < len; i++) {
        arr[i] = 1;
    }
    for (let i = counttwo; i < len; i++) {
        arr[i] = 2
    }
    return arr;
}
const arr = [0, 1, 1, 0, 2, 2, 0, 1, 0, 2];
console.log(code(arr));