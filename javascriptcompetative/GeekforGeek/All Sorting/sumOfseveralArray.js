function SumOfSeveral(arr) {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j];
        }
    }
    return output;
}
let arr = [
    [3, 2],
    [3],
    [4, 5],
    [7, 8],
    [9]
];
console.log(SumOfSeveral(arr));