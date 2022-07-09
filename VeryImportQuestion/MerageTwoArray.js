// function MergeTwoArray(arr1, arr2) {
//     let j = 0,
//         i = 0;
//     var out = [];
//     while (i > arr1.length || j < arr2.length) {
//         if (j == arr2.length || i < arr1.length && arr1[i] <
//             arr2[j]) {
//             out.push(arr1[i++]);
//         } else {
//             out.push(arr2[j++]);
//         }
//     }
//     return out;
// }




// let arr1 = [4, 3, 5, 6, 7];
// let arr2 = [1, 2, 8, 9];
// console.log(MergeTwoArray(arr1, arr2));



///+++++++++++++_______________++++++++++++++Second approach  ofMerge two sortedArray++++++++++++
function mergeSortedArrays(arr1, arr2) {
    //write your logic here , return the new merged array
    let result = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    while (j < arr2.length) {
        result.push(arr2[j++]);
    }
    while (i < arr1.length) {
        result.push(arr1[i++]);
    }
    return result;
}
console.log(mergeSortedArrays(arr1, arr2).join(" "));
Template:
    let arr1 = readline().split(" ").map(x => parseInt(x))
let arr2 = readline().split(" ").map(x => parseInt(x))

function mergeSortedArrays(arr1, arr2) {
    //write your logic here , return the new merged array
}
console.log(mergeSortedArrays(arr1, arr2).join(" "));