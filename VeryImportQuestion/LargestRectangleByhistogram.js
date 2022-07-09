// Given an array of integers heights representing the histogram 's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
// Example 1:
//     Input: heights = [2, 1, 5, 6, 2, 3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
function LargestRectangle(heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        const base = heights[i];
        const arr = [heights[i]];

        // go right
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[j] < base) break;
            arr.push(heights[j])
        }
        // go left
        for (let j = i - 1; j >= 0; j--) {
            if (heights[j] < base) break;
            arr.push(heights[j])
        }

        // calc and compare
        const area = arr.length * base
        if (area > max) max = area;
    }

    return max;
}
let heights = [2, 1, 5, 6, 2, 3];
console.log(LargestRectangle(heights));