function powerOfTwo(num) {
    return (Math.log2(num) % 1 === 0);
}
let num = 55;
console.log(powerOfTwo(num));