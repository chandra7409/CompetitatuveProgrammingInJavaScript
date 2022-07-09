function minimdifferev(arr) {
    arr.sort((a, b) => (a - b));
    let ans = 0;
    let diff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let abso = Math.abs(arr[i - 1] - arr[i]);
        if (diff > abso) {
            diff = abso;
            ans.length = 0;

        }
        if (diff == abso) {
            ans.push([arr[i - 1], arr[i]])
        }
    }
    return ans;


}
let arr = [3, 4, 5, 5, 4, 2, 2, 3, 3];
console.log(minimdifferev(arr));