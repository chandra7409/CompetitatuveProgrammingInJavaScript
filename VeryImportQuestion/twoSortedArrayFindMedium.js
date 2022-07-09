function SortedArray(arr1, arr2) {
    let compare = (i, j) => {
        return i - j;
    }
    let arr = arr1.concate(arr2).sort(compare);
    if (arr.length % 2 == 0) {
        return arr[arr.length / 2 - 1] + arr[arr.length / 2] / 2;
    }
    return arr[Math.floor(arr.length / 2)];
}
let arr1 = [1, 3, 4, 6, 7, 8];
let arr2 = [3, 4, 5, 7, 8];
console.log(SortedArray(arr1, arr2));