let MaximumProduct = (l1, r1, l2, r2) => {
    let max = Number.MIN_VALUE;
    for (let i = l1; i < r1; i++) {
        for (let j = l2; j < r2; j++) {
            max = Math.max(max, i * j);
        }
        // return max;
    }
    return max;
};
let l1 = 1,
    r1 = 4;
let l2 = 2,
    r2 = 9;
console.log(MaximumProduct(1, 4, 2, 9));