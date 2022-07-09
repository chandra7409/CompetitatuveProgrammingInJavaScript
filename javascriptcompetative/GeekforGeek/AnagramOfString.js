// function LastPosition(n, m, k) {
//     if (m <= n - k + 1)
//         return m + k - 1;
//     m = m - (n - k + 1);
//     return (m % n == 0) ? n : (m % n);

// }
// let n = 5;
// let m = 2;
// let k = 1;
// console.log(LastPosition(n, m, k));


//====maximum sum of array


function sumMax(n, arr) {
    let value = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        let curr_sum = 0;
        for (let j = 0; j < n; j++) {
            let idx = (i + j) % n;
        }
        value = Math.max(value, curr_sum);
    }
    return value;
}
let arr = [8, 3, 1, 2];
let n = arr.length;
console.log(sumMax(arr, n));