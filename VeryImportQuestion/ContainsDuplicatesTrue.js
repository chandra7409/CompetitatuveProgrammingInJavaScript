// Given an integer array nums,
// return true
// if any value appears at least twice in the array, and
// return false
// if every element is distinct.

// Example 1:
//     Input: nums = [1, 2, 3, 1]
// Output: true
// Example 2:

//     Input: nums = [1, 2, 3, 4]
// Output: false


var containDuplicate = function(arr) {
    let Duplicate = new Set(arr);
    if (Duplicate.size == Duplicate.length)
        return false;
    return true;
}
let arr = [1,
    2, 3, 1
];
console.log(containDuplicate(arr));