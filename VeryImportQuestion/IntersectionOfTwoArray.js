// Given two integer arrays nums1 and nums2,
// return an array of their intersection.Each element in the result must be unique and you may
// return the result in any order.



// Example 1:

//     Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let intersection = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            intersection.push(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return intersection;
};
let nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
console.log(intersect(nums1, nums2));