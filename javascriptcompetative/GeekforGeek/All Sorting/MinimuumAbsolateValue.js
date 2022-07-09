function MiniAbsoluteValue(arr) {
    let ans = [];
    let n = arr.length;
    arr.sort((a, b) => a - b);
    let miniDiff = Number.MAX_VALUE;
    for (let i = 0; i < n - 1; i++)
        miniDiff = Math.min(miniDiff, Math.abs(arr[i] - arr[i + 1]));
    for (let i = 0; i < n - 1; i++) {
        let pair = [];
        if (Math.abs(arr[i] - arr[i + 1]) == miniDiff) {
            pair.push(Math.min(arr[i], arr[i + 1]));
            pair.push(Math.max(arr[i], arr[i + 1]));
            ans.push(pair);
        }
    }
    return ans;



}
let arr = [4, 2, 1, 3];
let N = arr.length;
let pairs = MiniAbsoluteValue(arr);
for (let v of pairs)
    console.log(v[0] + " " + v[1] + '<br>');