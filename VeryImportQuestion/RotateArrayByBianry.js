//function RotateArray(arr, n) {
//     let min = arr[0];
//     let min_index = 0;
//     for (let i = 0; i < n; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//             min_index = i;
//         }
//     }
//     return min_index;
// }


////+++++++++++++++++++++++++++Another Approaches of this Question
function RotateArray(arr, low, high) {
    if (high < low)
        return 0;

    // If there is only one element left
    if (high == low)
        return low;

    // Find mid
    let mid = Math.floor(low + (high - low) / 2); /*(low + high)/2;*/

    // Check if element (mid+1) is minimum element.
    // Consider the cases like {3, 4, 5, 1, 2}
    if (mid < high && arr[mid + 1] < arr[mid])
        return (mid + 1);

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;

    // Decide whether we need to go to left half or
    // right half
    if (arr[high] > arr[mid])
        return RotateArray(arr, low, mid - 1);

    return RotateArray(arr, mid + 1, high);
}
let arr = [7,
    9, 11, 12, 5
]

let n = arr.length;
console.log(RotateArray(arr, 0, n - 1));