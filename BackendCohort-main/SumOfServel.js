function SumOfArrary(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
const array = [
    [3, 2],
    [1],
    [4, 12]
];
let sume = SumOfArrary(array);
console.log(sume);