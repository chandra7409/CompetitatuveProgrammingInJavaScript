function FirstCount(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let cur = arr[i];
        let next = arr[i + 1];
        if (cur + 1 != next) {
            return next;
        }
    }
    return null;
}
const arr1 = FirstCount([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(arr1);