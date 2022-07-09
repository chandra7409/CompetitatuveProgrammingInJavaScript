// Logarithmic function is the inverse to the exponential function. A logarithm to the base b is the power to which b must be raised to produce a given number. For example, \log_2 8 is equal to the power to which 2 must be raised to in order to produce 8. Clearly, 2^3 = 8 so \log_2 8 = 3. In general, for b > 0 and b not equal to 1.
//


// coded in js

function log2n(n) {
    return (n > 1) ? 1 + log2n(n / 2) : 0;

}
let n = 32;
console.log(log2n(n));