function SumPair(A, x) {
    let left;
    let right;
    let ans = [];
    A.sort();
    left = 0;
    right = A.length - 1;
    while (left < right) {
        if (A[left] + A[right] < x) {
            left++;

        } else if (A[left] + A[right] > x) {
            right--;
        } else {
            ans.push(A[left]);
        }
    }
}
let arr = [3, 4, 5, 6, 7, 8, 8];
let x = 15;
console.log(SumPair(arr, x));