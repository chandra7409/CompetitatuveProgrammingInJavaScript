//Write a program to rearrange the elements such like positive numbers shift to the end and negative numbers to the right
function Reannage(arr, n) {
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != i) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
            j++;

        }
    }
}

function PrinArrray(arr, n) {
    for (let i = 0; i < n; i++) {
        console.log(arr[i] + "");
    }
}
let arr = [-1, -2, 3, 4, 5, 23, 34, -23, -3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
Reannage(arr, n);
PrinArrray(arr, n);