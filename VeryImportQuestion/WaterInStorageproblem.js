function maxStorage(height) {
    let stack = []
    let maxUnit = 0
    for (let i = 0; i < height.length; i++) {
        while (stack.length != 0 && (height[stack[stack.length - 1]] < height[i])) {
            let last_element = height[stack.pop()]
            if (stack.length == 0)
                break
            let distance = i - stack[stack.length - 1] - 1
            let min_height = Math.min(height[stack[stack.length - 1]], height[i]) - last_element
            maxUnit += distance * min_height
        }
        stack.push(i)
    }
    return maxUnit
}
let walls = [3, 0, 1, 0, 4]
console.log(maxStorage(walls))