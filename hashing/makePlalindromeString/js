function makePalindrome(s) {
    let n = s.length;
    let pos = -1;
    let P = 53;
    let MOD = 1e9 + 7;
    let POW = 1;
    let hash1 = 0;
    let hash2 = 0;
    for (let idx = 0; idx < n; idx++, POW = POW * P % MOD) {
        hash1 = (hash1 * P + s.charCodeAt(idx)) % MOD;
        hash2 = (hash2 + (s.charCodeAt(idx)) * POW) % MOD;
        if (hash1 == hash2)
            pos = idx;
    }
    return [...s.slice(pos + 1, n)].reverse().join("").concat(s);
}
let res = makePalindrome("abc");
console.log(res);