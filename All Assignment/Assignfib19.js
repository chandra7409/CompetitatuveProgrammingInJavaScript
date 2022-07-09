//Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number says how many times the base number is used as a factor.
//8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

let Exponent = function(a, n) {
    if (n === 0) {
        return 1;
    } else {
        return a * Exponent(a, n - 1);
    }
};

console.log(Exponent(8, 2));