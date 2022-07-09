function linearSearch(array, n, x) {
    let i;
    for (let i = 0; i < n; i++)
        if (array[i] == x)
            return i;
    return -1;


}
const array = [2, 3, 4, 10, 40, 49, 58];
const x = 49;
let n = array.length;
let result = linearSearch(array, n, x);
console.log(result);