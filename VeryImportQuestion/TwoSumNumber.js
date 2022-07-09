function twoSum(num, target) {


    for (let i = 0; i < nums.length; i++) {
        if (nums.lastIndexOf(target - nums[i]) !== i && nums.lastIndexOf(target - nums[i]) >= 0) {
            return [i, nums.lastIndexOf(target - nums[i])]
        }
    }
    return []
}


let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));