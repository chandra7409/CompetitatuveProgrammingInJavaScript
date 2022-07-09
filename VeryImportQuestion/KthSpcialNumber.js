function findKElement(arr, n) {
    let j;
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (arr[j] % arr[i] > 0) {
                break;
            }
        }
        if (j == n) {
            return arr[i];
        }
    }
    return -1;
}

let arr = [25, 20, 5, 10, 100];
let n = arr.length;
console.log(findKElement(arr, n));