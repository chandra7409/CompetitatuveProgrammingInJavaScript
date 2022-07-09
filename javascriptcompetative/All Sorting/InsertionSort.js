function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currEle = arr[i];
        let j = i - 1; //starting comparing form index value
        while (j >= 0 && arr[j] > currEle) {
            arr[j + 1] = arr[j];
            j--;

        }
        arr[j + 1] = currEle;
    }

}
let arr = [4, 5, 6, 7, 83, 6, 8, 9];
console.log(arr);
InsertionSort(arr);
console.log(InsertionSort(arr));