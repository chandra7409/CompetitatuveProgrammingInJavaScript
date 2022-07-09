function MaximumProduct(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] * arr[arr.length - 2];
}
let arr = [2, 3, 5, 7, 8, 9, 12];
console.log(MaximumProduct(arr));