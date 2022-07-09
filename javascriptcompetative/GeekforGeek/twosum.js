function TwoSum(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
}
let target = 10;
let sumTo = TwoSum([2, 3, 4, 5, 6, 7, 9, 1, 2, 3, 4], 10);
console.log(sumTo);