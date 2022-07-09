let arr = [1, 2, 3, 4, 5, 9, 1, 9, 12, 3, 4];
Array.from(new Set(arr));

let arr1 = [1, 2, 3, 4, 5, 9, 1, 9, 12, 3, 4];
UniquicArray(arr);

function UniquicArray(arr) {
    let hashmap = {};
    let uniquic = [];
    for (let i = 0; i < arr.length; i++) {
        if (hashmap.hasOwnProperty(arr[i])) {
            hashmap[arr[i]] = 1;
            uniquic.push(arr[i]);
        }
    }
    return uniquic;
}
console.log(UniquicArray(arr));