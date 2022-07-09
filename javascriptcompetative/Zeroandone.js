// let outputArr = (arr) => {
//     let length = arr.length;
//     let countzero = 0,
//         countones = 0;
//     for (let i = 0; i < length; i++) {
//         if (arr[i] == 0) {
//             countzero++;
//         } else if (arr[i] == 1) {
//             countones++;
//         }
//     }
//     for (let i = 0; i < countzero; i++) {
//         arr[i] = 0;
//     }
//     for (let i = countzero; i < length; i++) {
//         arr[i] = 1;
//     }
//     return arr;
// }
// const arr = [0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
// console.log(outputArr(arr));




//=================== Array 0 and 1 solution anoyher method


let Input = [0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
let size = Input.length;

function ZeroOne(Input, size) {
    let start = 0;
    let mid = 0;
    let end = size - 1;
    while (mid <= end) {
        if (Input[mid] == 0) {
            mid++;
        } else {
            swap = Input[end];
            Input[end] = Input[mid];
            Input[mid] = swap;
            end--;
        }
    }
    return Input;
}
console.log(ZeroOne(Input, size));