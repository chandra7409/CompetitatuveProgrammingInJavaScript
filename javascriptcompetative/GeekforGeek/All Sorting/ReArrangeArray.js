function arrayPrint(array, n) {
    for (let i = 0; i < n; i++)
        console.log(array[i] + " ");
    console.log("<br />");
}

function ReArrangeArray(array, n) {
    let value, j;
    for (let i = 1; i < n; i++) {
        value = array[i];
        if (value > 0)
            continue;
        j = i - 1;
        while (j >= 0 && array[j] > 0) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = value;
    }
}
let array = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
let n = array.length;
ReArrangeArray(array, n);
arrayPrint(array, n);