function LucySeven(arr) {
    if (arr.length < 3) {
        return "not possible";
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] + arr[i - 1] + arr[i - 2] == 7) {
            return true;
        }
    }
    return false;
}
let Array = LucySeven([2, 1, 5, 1, 0], 7);
let targat = 7;
console.log(Array);