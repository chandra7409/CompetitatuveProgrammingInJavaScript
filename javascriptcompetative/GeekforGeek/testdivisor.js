function test_divisor(low, high) {
    let output = [];
    for (let i = low; i <= high; i++) {
        output.push(i);
        if (i % 3 === 0) {
            output.push('div3');
        }
    }
    return output;
}
console.log(test_divisor(2, 10));