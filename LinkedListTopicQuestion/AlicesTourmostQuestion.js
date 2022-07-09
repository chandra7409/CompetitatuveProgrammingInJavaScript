function helper(n) {
    let tt = Math.sqrt(n) + 1;
    for (let i = tt; i >= 1; i--) {
        if (n % i == 0) {
            return i + n / i
        }
    }
    return -1;
}

function solve() {
    let n;
    console.log(helper(n), '\n')
}

function main() {
    let T = 1;
    for (let ii = 1; ii <= T; ii++) {
        solve()
    }
}

main()