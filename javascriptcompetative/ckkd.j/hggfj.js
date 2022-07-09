let arr = [1, 0, 1, 1, 0, 0, 1, 1]
let count0 = 0;
let count1 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count0++;
    } else {
        count0++;


    }
}
console.log(count0, count1);
for (let i = 0; i < arr.length; i++) {
    if (count0 > 0) {
        arr[i] = 0;
        count0--;
    } else {
        arr[i] = 1;
    }
}
console.log(arr);