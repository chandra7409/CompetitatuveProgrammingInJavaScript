function lastPosition(n, m, k) {
    if (m <= n - k + 1)
        return m + k - 1;
    m = m - (n - k + 1);
    return (m % n == 0) ? n : (m % n);
}
var n = 5;
var m = 8;
var k = 2;
console.log(lastPosition(n, m, k));