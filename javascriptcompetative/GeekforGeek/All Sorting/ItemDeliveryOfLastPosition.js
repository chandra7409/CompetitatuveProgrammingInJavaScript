function lastPosition(n, k, m) {
    if (m <= n - k + 1)
        return m - k + 1;
    m = m - (n - k + 1);
    return (m % n == 0) ? n : (m % n);
}
let m = 8;
let n = 5;
let k = 2;
console.log(lastPosition(n, m, k));