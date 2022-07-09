function powerOfTwo(num) {
    while (num > 1) {
        if (num % 3 === 0) num /= 3;
        else break;
    }
    return num === 1;
}
let num = 27;
console.log(powerOfTwo(num));