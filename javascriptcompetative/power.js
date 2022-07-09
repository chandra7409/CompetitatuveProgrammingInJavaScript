let power = (num, pow) => {
    let p = 1;
    for (let i = 0; i < pow; i++) {
        p *= num; // p = p * num
    }
    return p;
};
console.log(power(5, 3));