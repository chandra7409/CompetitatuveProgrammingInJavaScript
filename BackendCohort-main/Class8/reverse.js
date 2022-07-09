// let arr = [3, 4, 5, 6, 7];

// function ReverseArray(arr) {
//     let size = arr.length - 1;
//     for (let i = size; i >= 0; i--) {
//         console.log(arr[i]);
//     }

// }
// ReverseArray(arr);

function ReverseArray(string) {
    if (!string || string.length < 2 || typeof string !== 'string') {
        return 'not valid';
    }
    const array = [];
    const length = string.length - 1;
    for (let i = length; i >= 0; i--) {
        array.push(string[i]);
    }
    return array.join('');

}
console.log(ReverseArray("RELEVEL"));