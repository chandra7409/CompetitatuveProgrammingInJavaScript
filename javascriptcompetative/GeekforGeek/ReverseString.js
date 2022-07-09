// function ReverseString(s) {
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//         [s[i],
//             [j]
//         ] = [s[j],
//             [i]
//         ]
//         i++;
//         j--;
//     }
// }


// let str = "Rerer";
// console.log(ReverseString(str));fu


// function ReverseString(s) {
//     return s.split('').map(W => W.split('').reverse().join('')).join('');
// }
// let W = "Rerer";
// console.log(ReverseString(W));





function ArrayMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum = sum + i;
        let avg = parseInt(sum / arr);
        console.log(avg);

    }
}
let arr = [1, 2, 3, 4, 4, 5, 5];
//let n = arr.length;
console.log(ArrayMean(arr));