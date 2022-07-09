function Trapping(height) {


    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    if (left <= right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (height[left] < height[right]) {
            result += leftMax - height[left++];
        } else {
            result += rightMax - height[right--];
        }
    }
    return result;

}
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(Trapping(height));