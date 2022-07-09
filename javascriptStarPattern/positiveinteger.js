function pairCount(n, m) {
    let count = 0;
    let b, a;
    for (b = 0; b <= Math.sqrt(m)) {
        a = m - b * b;
        if (a * a + b == n) {
            count++;

        }
    }
    return count;
}
let n = 9,
    m = 3;
console.log(n, m);